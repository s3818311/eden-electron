const { models } = require("../../sequelize");

const getAll = async (req, res) => {
  const classes = await models.examModel.findAll();
  res.status(200).json(classes);
};

const getById = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const exam = await models.examModel.findByPk(id);

  res.status(200).json(exam);
};

const getByClassId = async (req, res) => {
  const classId = Number.parseInt(req.params.id, 10);
  const exams = await models.examModel.findAll({
    where: {
      classModelId: classId,
    },
  });
  res.status(200).json(exams);
};

const create = async (req, res) => {
  const exam = await models.examModel.create(req.body);

  res.status(201).json(exam.id);
};

const remove = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  await models.examModel.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).end();
};

module.exports = { getAll, getById, getByClassId, create, remove };
