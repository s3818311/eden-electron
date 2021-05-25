import React, { useState } from "react";
import Question from "../components/question";
import AddQuestionCard from "../components/addQuestionCard";
import PropTypes from "prop-types";
import useFetch from "react-fetch-hook";
import Loading from "./loading";

const QuestionBank = (props) => {
  const questionList = useFetch(
    "http://localhost:3001/questions/classId/" + props.classId
  );

  const [addQuestion, toggleCard] = useState(false);

  const toggleAddQuestion = () => {
    toggleCard(!addQuestion);
  };

  const addStudentBtn = () => {
    return (
      <div className="flex justify-center w-full py-5">
        <div
          className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red"
          onClick={toggleCard}
        >
          Add Question
        </div>
      </div>
    );
  };

  return questionList.isLoading ? (
    <Loading />
  ) : (
    <div className="w-full overflow-auto">
      {questionList.data.map((question, index) => {
        return (
          <div key={index}>
            <Question questionObj={question} />
          </div>
        );
      })}

      {addQuestion ? (
        <AddQuestionCard
          classId={props.classId}
          toggleCard={toggleAddQuestion}
        />
      ) : (
        addStudentBtn()
      )}
    </div>
  );
};

QuestionBank.propTypes = {
  classId: PropTypes.string.isRequired,
};

export default QuestionBank;
