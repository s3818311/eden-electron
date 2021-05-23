const { models } = require("../../sequelize");

const getAll = async (req, res) => {
  const rows = await models.StudentTakesExam.findAll();
  res.status(200).json(rows);
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
    const [model, created] = await models.StudentTakesExam.findOrCreate({
      where: {
        studentModelId: studentId,
        examModelId: examId,
      },
      defaults: {
        mark: attendingIds.includes(studentId) ? 0 : null,
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

const setMark = async (req, res) => {
  await models.StudentTakesExam.update(
    { mark: req.body.mark },
    {
      where: {
        studentModelId: req.body.studentModelId,
        examModelId: req.body.examModelId,
      },
    }
  );

  res.status(200).end();
};

module.exports = { getAll, getByExamAndStudentId, create, setMark };
