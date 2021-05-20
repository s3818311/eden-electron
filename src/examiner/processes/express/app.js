const express = require("express");
const cors = require("cors");

const routes = {
  classes: require("./routes/classRoutes"),
  exams: require("./routes/examRoutes"),
  students: require("./routes/studentRoutes"),
  studentInClass: require("./routes/StudentInClassRoutes"),
  questions: require("./routes/questionRoutes"),
  answers: require("./routes/answerRoutes")
};

const app = express();

app.use(cors());
app.use(express.json());

const makeHandlerAwareOfAsyncErrors = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
};

for (const [routeName, routeController] of Object.entries(routes)){
  if (routeController.create) {
    app.post(`/${routeName}`, makeHandlerAwareOfAsyncErrors(routeController.create));
  }

  if (routeController.getAll) {
    app.get(`/${routeName}`, makeHandlerAwareOfAsyncErrors(routeController.getAll));
  }

  if (routeController.getById) {
    app.get(`/${routeName}/:id`, makeHandlerAwareOfAsyncErrors(routeController.getById));
  }

  if (routeController.remove) {
    app.delete(`/${routeName}/:id`, makeHandlerAwareOfAsyncErrors(routeController.remove));
  }

  if (routeController.getByClassId) {
    app.get(`/${routeName}/classId/:id`, makeHandlerAwareOfAsyncErrors(routeController.getByClassId));
  }

  if (routeController.getByQuestionId) {
    app.get(`/${routeName}/questionId/:id`, makeHandlerAwareOfAsyncErrors(routeController.getByQuestionId));
  }

  if (routeController.getStudentsByClassId) {
    app.get(`/${routeName}/:id`, makeHandlerAwareOfAsyncErrors(routeController.getStudentsByClassId));
  }

  if (routeController.getStudentsNotInClass) {
    app.get(`/${routeName}/not/:id`, makeHandlerAwareOfAsyncErrors(routeController.getStudentsNotInClass));
  }

  if (routeController.removeStudentFromClass) {
    app.delete(`/${routeName}`, makeHandlerAwareOfAsyncErrors(routeController.removeStudentFromClass));
  }
}

module.exports = app;