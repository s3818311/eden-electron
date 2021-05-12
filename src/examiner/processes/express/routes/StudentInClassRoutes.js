const { models } = require("../../sequelize");
const { Op } = require("sequelize");

const getStudentsByClassId = async (req, res) => {
  const classId = Number.parseInt(req.params.id, 10);
  const rows = await models.StudentInClass.findAll({
    where: {
      classModelId: classId
    },
    attributes: ["studentModelId"]
  });

  const studentIds = rows.map(obj => obj.studentModelId);

  const students = await models.studentModel.findAll({
    where: {
      id: studentIds
    }
  });

  res.status(200).send(students);
};

const getStudentsNotInClass = async (req, res) => {
  const classId = Number.parseInt(req.params.id, 10);
  const rows = await models.StudentInClass.findAll({
    where: {
      classModelId: classId
    },
    attributes: ["studentModelId"]
  });

  const studentIds = rows.map(obj => obj.studentModelId);

  const students = await models.studentModel.findAll({
    where: {
      id: {
        [Op.not]: studentIds
      }
    }
  });

  res.status(200).send(students);
};

const create = async (req, res) => {
  const studentId = req.body.studentModelId;
  const classId = req.body.classModelId;
  const [created] = await models.StudentInClass.findOrCreate({
    where: {
      studentModelId: studentId,
      classModelId: classId,
    }
  });

  created
    ? res.status(201).end()
    : res.status(400).send("Student already existed in this class");
};

const removeStudentFromClass = async (req, res) => {
  const studentId = req.body.studentModelId;
  const classId = req.body.classModelId;

  await models.StudentInClass.destroy({
    where: {
      studentModelId: studentId,
      classModelId: classId
    }
  });

  res.status(200).end();
};


module.exports = { getStudentsByClassId, getStudentsNotInClass, create, removeStudentFromClass };