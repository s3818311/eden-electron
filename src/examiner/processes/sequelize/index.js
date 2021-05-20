const { Sequelize } = require("sequelize");
const { applyAssociations } = require("./associations");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "public/testdb.sqlite3",
  logQueryParameters: true,
  benchmark: true,
  define: {
    freezeTableName: true
  }
});

const modelDefiners = [
  require("./models/class.model"),
  require("./models/exam.model"),
  require("./models/student.model"),
  require("./models/question.model"),
  require("./models/answer.model")
];

for (const modelDefiner of modelDefiners){
  modelDefiner(sequelize);
}

applyAssociations(sequelize);

module.exports = sequelize;