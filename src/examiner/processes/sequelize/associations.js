const { DataTypes } = require("sequelize");

const applyAssociations = (sequelize) => {
  const { examModel, classModel, studentModel } = sequelize.models;

  // class one-to-many exam
  examModel.belongsTo(classModel, {
    foreignKey: {
      allowNull: false
    },
    onDelete: "CASCADE"
  });
  classModel.hasMany(examModel, {
    foreignKey: {
      allowNull: false
    },
    onDelete: "CASCADE"
  });

  // class many-to-many student
  classModel.belongsToMany(studentModel, { through: "StudentInClass" });
  studentModel.belongsToMany(classModel, { through: "StudentInClass" });

  // student many-to-many exam
  const StudentTakesExam = sequelize.define("StudentTakesExam", {
    mark: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  examModel.belongsToMany(studentModel, { through: StudentTakesExam });
  studentModel.belongsToMany(examModel, { through: StudentTakesExam });
};

module.exports = { applyAssociations };