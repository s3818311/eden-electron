const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("answerModel", {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    isCorrectAnswer: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
  });
};
