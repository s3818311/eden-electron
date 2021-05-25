const { DataTypes } = require("sequelize");

const applyAssociations = (sequelize) => {
  const { examModel, classModel, studentModel, questionModel, answerModel } =
    sequelize.models;

  // class one-to-many exam
  examModel.belongsTo(classModel, {
    foreignKey: {
      allowNull: false,
    },
    onDelete: "CASCADE",
  });
  classModel.hasMany(examModel, {
    foreignKey: {
      allowNull: false,
    },
    onDelete: "CASCADE",
  });

  // class many-to-many student
  classModel.belongsToMany(studentModel, { through: "StudentInClass" });
  studentModel.belongsToMany(classModel, { through: "StudentInClass" });

  // student many-to-many exam
  const StudentTakesExam = sequelize.define("StudentTakesExam", {
    mark: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  examModel.belongsToMany(studentModel, { through: StudentTakesExam });
  studentModel.belongsToMany(examModel, { through: StudentTakesExam });

  // class one-to-many question
  classModel.hasMany(questionModel, {
    foreignKey: {
      allowNull: false,
    },
    onDelete: "CASCADE",
  });
  questionModel.belongsTo(classModel, {
    foreignKey: {
      allowNull: false,
    },
    onDelete: "CASCADE",
  });

  // question one-to-many answer
  questionModel.hasMany(answerModel, {
    foreignKey: {
      allowNull: false,
    },
    onDelete: "CASCADE",
  });
  answerModel.belongsTo(questionModel, {
    foreignKey: {
      allowNull: false,
    },
    onDelete: "CASCADE",
  });
};

module.exports = { applyAssociations };
