const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("questionModel", {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    difficulty: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isIn: [["easy", "medium", "hard"]],
      },
    },
  });
};
