const app = require("./express/app");
const sequelize = require("./sequelize");

const PORT = process.env.PORT || 3001;

const assertDatabaseConnectionOk = async () => {
  console.log("Checking database connection...");
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
};

const init = async () => {
  await assertDatabaseConnectionOk();

  console.log(`Starting Sequelize + Express on port ${PORT}...`);

  app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}`);
  });
};

init();
