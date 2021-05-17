const { models } = require("../../sequelize");

const getAll = async (req, res) => {
  const classes = await models.examModel.findAll();
  res.status(200).json(classes);
};

const getByClassId = async (req, res) => {
  const classId = Number.parseInt(req.params.id, 10);
  const exams = await models.examModel.findAll({
    where: {
      classModelId: classId
    }
  });
  res.status(200).json(exams);
};

const create = async (req, res) => {
  await models.examModel.create(req.body);
  res.status(201).end();
};

const remove = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  await models.examModel.destroy({
    where: {
      id: id
    }
  });
  res.status(200).end();
};

module.exports = { getAll, getByClassId, create, remove };