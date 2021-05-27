const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("examModel", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      isIn: [["NONE", "LAUNCHED", "IN_SESSION"]],
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    instruction: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    autoGrading: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    hasTimeLimit: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    timeLimit: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    shuffleAnswers: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    shuffleQuestions: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
  });
};
