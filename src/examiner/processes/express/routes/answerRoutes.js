const { models } = require("../../sequelize");

const getByQuestionId = async (req, res) => {
  const questionId = Number.parseInt(req.params.id, 10);
  const answers = await models.answerModel.findAll({
    where: {
      questionModelId: questionId,
    },
  });
  res.status(200).json(answers);
};

const create = async (req, res) => {
  const questionId = Number.parseInt(req.body.questionId, 10) ;
  const correctId = Number.parseInt(req.body.correctOptionId, 10);

  await req.body.options.reduce(async (memo, title, index) => {
    await memo;
    const answerObj = {
      title: title,
      isCorrectAnswer: index === correctId,
      questionModelId: questionId,
    };
    await models.answerModel.create(answerObj);
  }, undefined);

  res.status(201).end();
};

const addOption = async (req, res) => {
  const questionId = Number.parseInt(req.body.questionId, 10);

  const answerObj = {
    title: req.body.title,
    isCorrectAnswer: false,
    questionModelId: questionId,
  };
  await models.answerModel.create(answerObj);

  res.status(201).end();
};

const remove = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);

  await models.answerModel.destroy({
    where: {
      id: id,
    },
  });

  res.status(200).end();
};

module.exports = { getByQuestionId, create, remove, addOption };
