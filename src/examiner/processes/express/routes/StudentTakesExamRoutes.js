/* eslint-disable no-unused-vars */
const { models } = require("../../sequelize");
const { Op } = require("sequelize");
const { json } = require("sequelize");

const getAll = async (req, res) => {
  const rows = await models.StudentTakesExam.findAll();
  res.status(200).json(rows);
};

const getAttendingStudents = async (req, res) => {
  const examId = Number.parseInt(req.params.examId, 10);
  const rows = await models.StudentTakesExam.findAll({
    where: {
      examModelId: examId,
      mark: {
        [Op.not]: null,
      },
    },
    attributes: ["studentModelId", "status"],
  });

  const studentIds = rows.map((obj) => obj.studentModelId);
  const objs = rows.map((obj) => {
    return {
      studentId: obj.studentModelId,
      status: obj.status,
    };
  });

  const students = await models.studentModel.findAll({
    where: {
      id: studentIds,
    },
    attributes: ["id", "name"],
  });

  students.forEach((studentObj) => {
    objs.find((o) => o.studentId === studentObj.id).name = studentObj.name;
  });

  res.status(200).json(objs);
};

const getByExamAndStudentId = async (req, res) => {
  const examId = Number.parseInt(req.params.examId, 10);
  const studentId = Number.parseInt(req.params.studentId, 10);
  const row = await models.StudentTakesExam.findOne({
    where: {
      examModelId: examId,
      studentModelId: studentId,
    },
  });

  res.status(200).json(row);
};

const create = async (req, res) => {
  const examId = req.body.examModelId;
  const attendingIds = req.body.attendingIds;
  const existedRows = [];

  await req.body.studentIds.reduce(async (memo, studentId) => {
    await memo;
    // eslint-disable-next-line no-unused-vars
    const [model, created] = await models.StudentTakesExam.findOrCreate({
      where: {
        studentModelId: studentId,
        examModelId: examId,
      },
      defaults: {
        mark: attendingIds.includes(studentId) ? 0 : null,
        status: "NONE",
      },
    });

    if (!created) {
      existedRows.push(studentId);
    }
  }, undefined);

  existedRows.length == 0
    ? res.status(201).end()
    : res
        .status(400)
        .send(`Student(s) with id ${existedRows} already took this exam`);
};

const setStatus = async (req, res) => {
  await models.StudentTakesExam.update(
    { status: req.body.status },
    {
      where: {
        studentModelId: req.body.studentModelId,
        examModelId: req.body.examModelId,
      },
    }
  );

  res.status(200).end();
};

const submitExam = async (req, res) => {
  const studentId = Number.parseInt(req.params.studentId, 10);
  const examId = Number.parseInt(req.params.examId, 10);
  const submittedExam = req.body.examData;
  let qCount = 0;
  let correctQCount = 0;

  // Calculate mark
  for (const question in submittedExam) {
    if (Object.hasOwnProperty.call(submittedExam, question)) {
      const optionId = Number.parseInt(submittedExam[question]);
      const isCorrect = await models.answerModel
        .findByPk(optionId, {
          attributes: ["isCorrectAnswer"],
        })
        .then((res) => {
          return res.getDataValue("isCorrectAnswer");
        });

      if (isCorrect) {
        correctQCount++;
      }

      qCount++;
    }
  }

  const finalMark = correctQCount / qCount;

  // Update status
  await models.StudentTakesExam.update(
    { status: "NONE" },
    {
      where: {
        studentModelId: studentId,
        examModelId: examId,
      },
    }
  );

  // Update mark
  await models.StudentTakesExam.update(
    { mark: finalMark },
    {
      where: {
        studentModelId: studentId,
        examModelId: examId,
      },
    }
  );

  res.status(200).json({ total: qCount, correct: correctQCount });
};
module.exports = {
  getAll,
  getAttendingStudents,
  getByExamAndStudentId,
  create,
  setStatus,
  submitExam,
};
