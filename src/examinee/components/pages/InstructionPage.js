import React, { useEffect, useState } from "react";
import Instruction from "../text/Instruction";
import Spinner from "../button/Spinner";
import InfoExaminee from "../text/InfoExaminee";
import useFetch from "react-fetch-hook";
import useInterval from "../functions/useInterval";

const InstructionPage = () => {
  const [examId, setExamId] = useState(null);

  const studentInfo = useFetch(
    "http://192.168.1.21:3001/students/" +
      new URLSearchParams(window.location.search).get("studentId")
  );

  const exam = useFetch("http://192.168.1.21:3001/exams/get/launched");

  useEffect(() => {
    if (!studentInfo.isLoading && !exam.isLoading) {
      fetch("http://192.168.1.21:3001/studentTakesExam/set/status", {
        method: "PATCH",
        body: JSON.stringify({
          status: "WAITING",
          studentModelId: studentInfo.data.id,
          examModelId: exam.data.id,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setExamId(exam.data.id);
    }
  });

  useInterval(() => {
    if (examId) {
      fetch("http://192.168.1.21:3001/exams/" + examId)
        .then((res) => res.json())
        .then((res) => {
          const studentId = new URLSearchParams(window.location.search).get(
            "studentId"
          );
          if (res.status === "IN_SESSION")
            window.location.href = `http://localhost:3000/question?examId=${examId}&studentId=${studentId}`;
        });
    }
  }, 2000);

  const goBack = () => {
    if (!!studentInfo.data && !!exam.data)
      fetch("http://192.168.1.21:3001/studentTakesExam/student/set/status", {
        method: "PATCH",
        body: JSON.stringify({
          status: "NONE",
          studentModelId: studentInfo.data.id,
          examModelId: exam.data.id,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }).then(() => {
        history.back();
      });
    else history.back();
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-2/3 h-full px-10">
          <div className="flex items-center h-1/3">
            {!studentInfo.isLoading && !!studentInfo.data ? (
              <InfoExaminee
                id={studentInfo.data.id}
                name={studentInfo.data.name}
                dob={studentInfo.data.dob}
              />
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center h-2/3">
            {!exam.isLoading && !!exam.data ? (
              <Instruction instruction={exam.data.instruction} />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center w-1/3 h-full px-10">
          <div className="flex items-center w-full h-1/3">
            <div className="text-2xl">Not your info?</div>
            <button
              className="h-12 px-4 py-2 mx-auto font-bold text-white rounded bg-rmit-red hover:bg-rmit-red-bold focus:border-none"
              onClick={goBack}
            >
              Go Back
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-2/3">
            <Spinner />
            <div className="pt-5">Please wait for other students to join</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;
