const { models } = require("../../sequelize");

const getByClassId = async (req, res) => {
  const classId = Number.parseInt(req.params.id, 10);
  const questions = await models.questionModel.findAll({
    where: {
      classModelId: classId,
    },
  });
  res.status(200).json(questions);
};

const create = async (req, res) => {
  const body = req.body;
  const questionObj = {
    title: body.title,
    difficulty: body.difficulty,
    classModelId: body.classModelId,
  };

  const question = await models.questionModel.create(questionObj);

  res.status(201).json(question.id);
};

const remove = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);

  await models.questionModel.destroy({
    where: {
      id: id,
    },
  });

  res.status(200).end();
};

// const update = async (req, res) => {
//   const
// }

module.exports = { getByClassId, create, remove };
