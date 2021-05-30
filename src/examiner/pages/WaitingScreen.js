import React from "react";
import useFetch from "react-fetch-hook";
import Loading from "../components/loading";

const getExamId = () => {
  return new URLSearchParams(window.location.search).get("examId");
};

const StudentList = (props) => {
  return props.attendingStudents.data.map((student, idx) => (
    <div
      key={idx}
      className={`m-2 ${student.status === "NONE" ? "animate-pulse" : ""}`}
    >
      <div
        className={`p-2 ${
          student.status === "NONE"
            ? "bg-gray-100"
            : student.status === "WAITING"
            ? "bg-yellow-200"
            : student.status === "TAKING"
            ? "bg-green-200"
            : student.status === "SUBMITTED"
            ? "bg-red-200"
            : ""
        }`}
      >
        <div className="inline-block w-1/2">{student.name}</div>
        <div className="inline-block w-1/2 text-right">
          {student.status === "NONE"
            ? "Not entered"
            : student.status === "WAITING"
            ? "Waiting"
            : student.status === "TAKING"
            ? "Taking exam"
            : student.status === "SUBMITTED"
            ? "Submitted"
            : ""}
        </div>
      </div>
    </div>
  ));
};

const WaitingScreen = () => {
  const attendingStudents = useFetch(
    "http://localhost:3001/studentTakesExam/student/get/attending/exam/" +
      getExamId()
  );

  const exam = useFetch("http://localhost:3001/exams/" + getExamId());

  const checkAllJoined = () => {
    if (attendingStudents.isLoading) return false;

    let allJoined = true;
    attendingStudents.data.forEach((obj) => {
      if (obj.status !== "WAITING") allJoined = false;
    });

    return allJoined;
  };

  const checkAllTaking = () => {
    if (attendingStudents.isLoading) return false;

    let allTaking = true;
    attendingStudents.data.forEach((obj) => {
      if (obj.status === "NONE" || obj.status === "WAITING") allTaking = false;
    });

    return allTaking;
  };

  const checkAllSubmitted = () => {
    if (attendingStudents.isLoading) return false;

    let allSubmitted = true;
    attendingStudents.data.forEach((obj) => {
      if (
        obj.status === "NONE" ||
        obj.status === "WAITING" ||
        obj.status === "TAKING"
      )
        allSubmitted = false;
    });

    return allSubmitted;
  };

  const startExam = () => {
    fetch("http://localhost:3001/exams/set/status", {
      method: "PATCH",
      body: JSON.stringify({
        status: "IN_SESSION",
        examModelId: exam.data.id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const endExam = () => {
    fetch("http://localhost:3001/exams/set/status", {
      method: "PATCH",
      body: JSON.stringify({
        status: "NONE",
        examModelId: exam.data.id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      const classId = new URLSearchParams(window.location.search).get(
        "classId"
      );
      window.location.href = `http://localhost:3000/class/${classId}/result`;
    });
  };

  return (
    <div className="flex items-center w-screen h-screen">
      <div className="justify-center w-full h-auto grid grid-rows gap-y-3">
        <div className="h-16 px-32 ">
          <div className="flex items-center w-full h-full rounded-sm bg-rmit-blue">
            <div className="mx-auto text-2xl text-center text-white">
              {exam.isLoading ? <Loading /> : exam.data.title}
            </div>
          </div>
        </div>

        <div className="h-12 px-32 ">
          <div className="flex items-center w-full h-full rounded-sm bg-wating-banner bg-opacity-70">
            <div className="mx-auto text-xl text-center text-black">
              {checkAllSubmitted()
                ? "All examinees have submitted"
                : checkAllTaking()
                ? "Exam is in session"
                : checkAllJoined()
                ? "All examinees joined"
                : "Waiting for examinees to join ..."}
            </div>
          </div>
        </div>

        <div className="px-36">
          <div className="w-full h-48 p-4 overflow-auto border-2">
            {!attendingStudents.isLoading && (
              <StudentList attendingStudents={attendingStudents} />
            )}
          </div>
          <div className="flex justify-end w-full py-2">
            {checkAllJoined() ? (
              <button
                className="px-4 py-2 font-bold text-white rounded bg-rmit-red hover:bg-rmit-red-bold"
                onClick={startExam}
              >
                Distribute test
              </button>
            ) : (
              <button
                className="px-4 py-2 font-bold text-white rounded bg-rmit-red hover:bg-rmit-red-bold"
                onClick={endExam}
              >
                End exam
              </button>
            )}
          </div>
        </div>

        <div className="h-12 px-32 ">
          <div className="flex items-center justify-center w-1/2 h-full rounded-sm bg-rmit-blue">
            <div className="text-xl text-center text-white">Announcement</div>
          </div>
        </div>

        <div className="px-36">
          <textarea
            type="text"
            className="w-full px-3 py-2 mb-2 text-lg text-gray-700 border rounded focus:bg-primary"
            placeholder="Message"
          />
          <div className="flex justify-end w-full py-2">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white rounded bg-rmit-red hover:bg-rmit-red-bold"
            >
              Send
            </button>
          </div>
        </div>

        <div className="px-96"></div>
      </div>
    </div>
  );
};

export default WaitingScreen;
