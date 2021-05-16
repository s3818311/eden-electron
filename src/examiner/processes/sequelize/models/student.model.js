const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("studentModel", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dob: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  });
};