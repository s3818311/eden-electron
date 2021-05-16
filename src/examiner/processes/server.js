// import "reflect-metadata";
// import { createConnection } from "typeorm";
// import express, { Request, Response } from "express";
// import cors from "cors";
// import { AppRoutes } from "./appRoutes";

// require("reflect-metadata");
// const { createConnection } = require("typeorm");
// const { AppRoutes } = require("./appRoutes");
// const cors = require("cors");
// const app = require("express");

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

  console.log(`Starting Sequelize + Express example on port ${PORT}...`);

  app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}. Try some routes, such as '/api/users'.`);
  });
};

init();