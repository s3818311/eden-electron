/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import RadioButton from "./RadioButton";

const Question = (props) => {
  const [questionObj, editQuestion] = useState(props.questionObj);

  const [currentAnswer, setCorrectAnswer] = useState(0);

  const selectOption = (evt) => {
    const id = evt.target.id;
    setCorrectAnswer(id);
  };

  return (
    <div className="py-4 pb-10">
      <div className="flex flex-wrap content-start p-6 mx-auto bg-white border-2 border-gray-400 rounded-lg">
        <div className="flex items-center w-full pb-10 border-b-2 border-gray-400 h-1/6 grid grid-cols-2">
          <input
            className="w-auto text-2xl text-left border-b-2 text-rmit-blue placeholder-rmit-blue focus:border-blue-400 focus:outline-none"
            type="text"
            placeholder={questionObj.question}
          />

          <div className={`px-6 py-3 text-white  rounded-full place-self-end 
          ${questionObj.difficulty === "Easy" && "bg-green-500"}
          ${questionObj.difficulty === "Intermediate" && "bg-yellow-500"}
          ${questionObj.difficulty === "Hard" && "bg-red-500"}`}>
            {questionObj.difficulty}
          </div>
        </div>

        <div className="w-full pt-10 pb-3 text-xl ">
          {questionObj.options.map((item, index) => {
            return (
              <div key={index} className="py-1 transition-all">
                <div className="flex items-center ">
                  <RadioButton
                    isSelected={item.id === Number(currentAnswer)}
                    toggleCheckBtn={selectOption}
                    optionId={item.id}
                  />
                  <input
                    type="text"
                    className="inline-block w-2/3 ml-10 border-b-2 focus:border-blue-400 focus:outline-none"
                    placeholder={item.content}
                  />{" "}
                </div>
              </div>
            );
          })}

          <div className="pt-1">
            <button className="p-1 ml-10 border border-black rounded-md hover:bg-gray-200 focus:outline-nones">
              + Add option
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  questionObj: PropTypes.object.isRequired
};

export default Question;
