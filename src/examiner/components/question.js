/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import RadioButton from "./RadioButton";
import { AiFillDelete, AiOutlineCheck, AiFillSave } from "react-icons/ai";
import useFetch from "react-fetch-hook";
import Loading from "./loading";

const Question = (props) => {
  const optionList = useFetch(
    "http://localhost:3001/answers/questionId/" + props.questionObj.id
  );

  const [currentAnswer, setCorrectAnswer] = useState(0);

  const selectOption = (evt) => {
    const id = evt.target.id;
    setCorrectAnswer(id);
  };

  //check if the answer is updated
  const [isModified, setModified] = useState(false);

  const toggleModified = () => {
    setModified(true);
  };

  const cancelModified = () => {
    // location.reload();
  };

  //check if user added new options
  const [newOptions, updateNewOptions] = useState(false);

  const toggleNewOption = () => {
    updateNewOptions(!newOptions);
  };

  const newOptionForm = () => {
    return (
      <div className="py-1 transition-all">
        <div className="flex items-center ">
          <RadioButton />
          <input
            type="text"
            className="inline-block w-2/3 ml-10 border-b-2 focus:border-blue-400 focus:outline-none"
            placeholder="New Option"
          />{" "}
          <form className="flex items-center flex-grow grid grid-cols-2">
            <input type="hidden"></input>
            <button
              className="text-green-400 cursor-pointer place-self-end"
              onClick={toggleNewOption}
            >
              <AiOutlineCheck />
            </button>

            <button
              className="text-red-500 cursor-pointer place-self-end"
              onClick={toggleNewOption}
            >
              <AiFillDelete />
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 pb-0">
      <div className="flex flex-wrap content-start p-6 pb-2 mx-auto bg-white border-2 border-gray-400 rounded-lg">
        <div className="flex items-center w-full pb-3 border-b-2 border-gray-400 h-1/6 grid grid-cols-2">
          <input
            className="w-auto text-2xl text-left border-b-2 text-rmit-blue placeholder-rmit-blue focus:border-blue-400 focus:outline-none"
            type="text"
            placeholder={props.questionObj.title}
            onChange={() => {
              toggleModified();
            }}
          />

          <div
            className={`px-6 py-3 text-white  rounded-full place-self-end 
          ${props.questionObj.difficulty === "easy" && "bg-green-500"}
          ${props.questionObj.difficulty === "medium" && "bg-yellow-500"}
          ${props.questionObj.difficulty === "hard" && "bg-red-500"}`}
          >
            {props.questionObj.difficulty.charAt(0).toUpperCase() +
              props.questionObj.difficulty.slice(1)}
          </div>
        </div>

        <div className="w-full pt-10 pb-3 text-xl ">
          {optionList.isLoading ? (
            <Loading />
          ) : (
            optionList.data.map((item, index) => {
              return (
                <div key={index} className="py-1 transition-all">
                  <div className="flex items-center">
                    <RadioButton
                      isSelected={!!item.isCorrectAnswer}
                      toggleCheckBtn={selectOption}
                      optionId={item.id}
                    />
                    <input
                      type="text"
                      className="inline-block w-2/3 ml-10 border-b-2 focus:border-blue-400 focus:outline-none"
                      placeholder={item.title}
                      onChange={() => {
                        toggleModified();
                      }}
                    />
                    <form className="flex items-center flex-grow grid">
                      <input type="hidden"></input>
                      <button
                        className="text-red-500 cursor-pointer place-self-end"
                        type="submit"
                      >
                        <AiFillDelete />
                      </button>
                    </form>
                  </div>
                </div>
              );
            })
          )}

          {newOptions ? (
            newOptionForm()
          ) : (
            <div className="pt-5 grid grid-cols">
              <button
                className="p-1 px-3 ml-10 border border-gray-400 rounded-md hover:bg-gray-200 focus:outline-nones justify-self-start"
                onClick={toggleNewOption}
              >
                + Add option
              </button>

              <div
              className="inline-block px-3 py-1 text-white cursor-pointer rounded-md bg-rmit-red justify-self-end">
                Delete Question
              </div>
            </div>
          )}


          {isModified && (
            <div className="flex justify-end w-full py-5">
              <div
                className="inline-block px-5 py-1 mx-3 text-white cursor-pointer rounded-md bg-rmit-red"
                onClick={() => {
                  cancelModified();
                }}
              >
                Cancel
              </div>
              <div className="inline-block px-5 py-1 text-white bg-green-400 cursor-pointer rounded-md">
                Save changes
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  questionObj: PropTypes.object.isRequired,
};

export default Question;
