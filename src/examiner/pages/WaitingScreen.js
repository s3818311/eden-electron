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
            : ""
        }`}
      >
        <div className="inline-block w-1/2">{student.name}</div>
        <div className="inline-block w-1/2 text-right">
          {student.status === "NONE"
            ? "Not entered"
            : student.status === "WAITING"
            ? "Waiting"
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
              {checkAllJoined()
                ? "All examinees joined"
                : "Wating for examinees to join ..."}
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
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white rounded bg-rmit-red hover:bg-rmit-red-bold"
            >
              Distribute test
            </button>
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
