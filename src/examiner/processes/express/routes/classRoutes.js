const { models } = require("../../sequelize");

const getAll = async (req, res) => {
  const classes = await models.classModel.findAll();
  res.status(200).json(classes);
};

const getById = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const classObj = await models.classModel.findByPk(id);
  if (classObj) {
    res.status(200).json(classObj);
  } else {
    res.status(404).send("Class not found");
  }
};

const create = async (req, res) => {
  await models.classModel.create(req.body);
  res.status(201).end();
};

const remove = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  await models.classModel.destroy({
    where: {
      id: id
    }
  });
  res.status(200).end();
};

module.exports = { getAll, getById, create, remove };