import React, { useState } from "react";
import MultipleChoice from "../question/MultipleChoice";
// import BottomButton from "../button/BottomButton";
// import Announcement from "../announcement/Announcement";
// import ProgressBar from "../progress/ProgressBar";
import Title from "../text/Title";
import useFetch from "react-fetch-hook";
import useInterval from "../functions/useInterval";
import { useForm } from "react-hook-form";

const Questions = (props) => {
  return props.questions.data.map((question, index) => (
    <MultipleChoice
      key={index}
      title={question.title}
      questionId={question.id}
      register={props.register}
    />
  ));
};

const QuestionPage = () => {
  const [status, setStatus] = useState(true);

  const { register, handleSubmit } = useForm();

  const examInfo = useFetch(
    "http://192.168.1.21:3001/exams/" +
      new URLSearchParams(window.location.search).get("examId")
  );

  const studentInfo = useFetch(
    "http://192.168.1.21:3001/students/" +
      new URLSearchParams(window.location.search).get("studentId")
  );

  const questions = useFetch(
    "http://192.168.1.21:3001/questions/examId/" +
      new URLSearchParams(window.location.search).get("examId")
  );

  useInterval(() => {
    if (!studentInfo.isLoading && !examInfo.isLoading && status) {
      fetch("http://192.168.1.21:3001/studentTakesExam/set/status", {
        method: "PATCH",
        body: JSON.stringify({
          status: "TAKING",
          studentModelId: studentInfo.data.id,
          examModelId: examInfo.data.id,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }).then(() => {
        setStatus(false);
      });
    }
  }, 1000);

  const submitExam = (formData) => {
    const sId = new URLSearchParams(window.location.search).get("studentId");
    const eId = new URLSearchParams(window.location.search).get("examId");
    fetch(`http://192.168.1.21:3001/submitExam/${sId}/${eId}`, {
      method: "POST",
      body: JSON.stringify({
        examData: formData,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        window.location.href = `http://localhost:3000/scores?examId=${eId}&studentId=${sId}&t=${res.total}&c=${res.correct}`;
      });
  };

  return (
    <div className="w-full h-screen">
      <Title
        title={examInfo.isLoading ? "" : examInfo.data.title}
        subTitle={
          studentInfo.isLoading
            ? ""
            : `${studentInfo.data.id} - ${studentInfo.data.name}`
        }
      />
      <form onSubmit={handleSubmit(submitExam)}>
        {!questions.isLoading && (
          <Questions questions={questions} register={register} />
        )}

        <div className="w-full my-5 text-center">
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white rounded bg-rmit-red hover:bg-rmit-red-bold focus:border-none"
          >
            Submit Exam
          </button>
        </div>
      </form>
      {/* <ProgressBar /> */}
      {/* <BottomButton nextButton="Next" isPrevButton={true} /> */}
      {/* <Announcement /> */}
    </div>
  );
};

export default QuestionPage;
