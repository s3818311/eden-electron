const { models } = require("../../sequelize");

const getAll = async (req, res) => {
  const students = await models.studentModel.findAll();
  res.status(200).json(students);
};

const create = async (req, res) => {
  if (Array.isArray(req.body)){
    req.body.map(async (obj) => await models.studentModel.create(obj));
  } else {
    await models.studentModel.create(req.body);
  }
  res.status(201).end();
};

const remove = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);

  await models.studentModel.destroy({
    where: {
      id: id
    }
  });

  res.status(200).end();
};

module.exports = { getAll, create, remove };