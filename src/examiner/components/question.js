/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import RadioButton from "./RadioButton";

const Question = () => {
  const [questionObj, editQuestion] = useState({
    question: "Question 1",
    options: [
      {
        id: 1,
        content: "Test1",
      },
      {
        id: 2,
        content: "Test2",
      },
      {
        id: 3,
        content: "Test3",
      },
      {
        id: 4,
        content: "Test4",
      },
    ],
  });

  const [currentAnswer, setCorrectAnswer] = useState(0);

  const selectOption = (evt) => {
    const id = evt.target.id;
    setCorrectAnswer(id);
  };

  return (
    <div className="py-4 pb-10">
      <div className="flex flex-wrap content-start p-6 mx-auto bg-white border-2 border-black rounded-lg">
        <div className="flex items-center w-full pb-10 border-b-2 border-black h-1/6">
          <input
            className="w-1/3 text-2xl text-left border-b-2 text-rmit-blue placeholder-rmit-blue focus:border-blue-400 focus:outline-none"
            type="text"
            placeholder={questionObj.question}
          />
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

export default Question;
