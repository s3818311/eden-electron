const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("questionModel", {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isIn: [["multiple-choice"]]
      }
    }
  });
};