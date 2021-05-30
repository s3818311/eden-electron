/* eslint-disable no-unused-vars */
const express = require("express");
const cors = require("cors");

const multer = require("multer");
const upload = multer({ dest: "tmp/csv/" });

const routes = {
  classes: require("./routes/classRoutes"),
  exams: require("./routes/examRoutes"),
  students: require("./routes/studentRoutes"),
  questions: require("./routes/questionRoutes"),
  answers: require("./routes/answerRoutes"),
  studentInClass: require("./routes/StudentInClassRoutes"),
  studentTakesExam: require("./routes/StudentTakesExamRoutes"),
};

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const makeHandlerAwareOfAsyncErrors = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
};

for (const [routeName, routeController] of Object.entries(routes)) {
  if (routeController.submitExam) {
    app.post(
      "/submitExam/:studentId/:examId",
      makeHandlerAwareOfAsyncErrors(routeController.submitExam)
    );
  }

  if (routeController.upload) {
    app.post(
      `/${routeName}/upload`,
      upload.single("file"),
      makeHandlerAwareOfAsyncErrors(routeController.upload)
    );
  }

  if (routeController.create) {
    app.post(
      `/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.create)
    );
  }

  if (routeController.addOption) {
    app.post(
      `/${routeName}/addOption`,
      makeHandlerAwareOfAsyncErrors(routeController.addOption)
    );
  }

  if (routeController.getAll) {
    app.get(
      `/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.getAll)
    );
  }

  if (routeController.getById) {
    app.get(
      `/${routeName}/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.getById)
    );
  }

  if (routeController.remove) {
    app.delete(
      `/${routeName}/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.remove)
    );
  }

  if (routeController.getByClassId) {
    app.get(
      `/${routeName}/classId/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.getByClassId)
    );
  }

  if (routeController.getByExamId) {
    app.get(
      `/${routeName}/examId/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.getByExamId)
    );
  }

  if (routeController.getByQuestionId) {
    app.get(
      `/${routeName}/questionId/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.getByQuestionId)
    );
  }

  if (routeController.getStudentsByClassId) {
    app.get(
      `/${routeName}/classId/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.getStudentsByClassId)
    );
  }

  if (routeController.getStudentsNotInClass) {
    app.get(
      `/${routeName}/not/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.getStudentsNotInClass)
    );
  }

  if (routeController.removeStudentFromClass) {
    app.delete(
      `/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.removeStudentFromClass)
    );
  }

  if (routeController.getLaunchedExam) {
    app.get(
      `/${routeName}/get/launched`,
      makeHandlerAwareOfAsyncErrors(routeController.getLaunchedExam)
    );
  }

  if (routeController.getByExamAndStudentId) {
    app.get(
      `/${routeName}/:examId/:studentId`,
      makeHandlerAwareOfAsyncErrors(routeController.getByExamAndStudentId)
    );
  }
  if (routeController.setStatus) {
    app.patch(
      `/${routeName}/set/status`,
      makeHandlerAwareOfAsyncErrors(routeController.setStatus)
    );
  }

  if (routeController.getAttendingStudents) {
    app.get(
      `/${routeName}/student/get/attending/exam/:examId`,
      makeHandlerAwareOfAsyncErrors(routeController.getAttendingStudents)
    );
  }
}

module.exports = app;
