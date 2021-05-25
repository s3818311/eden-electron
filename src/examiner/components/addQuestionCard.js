import React, { useState } from "react";
import PropTypes from "prop-types";
import RadioButton from "./RadioButton";
import { AiFillDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";

const AddQuestionCard = (props) => {
  const [currentAnswer, setCorrectAnswer] = useState(0);

  const { register, handleSubmit } = useForm();

  const [options, setOptions] = useState([
    {
      id: 0,
      content: "New option",
    },
  ]);

  const selectOption = (evt) => {
    const id = evt.target.id;
    setCorrectAnswer(id);
  };

  const addOption = () => {
    const id = options.length;
    setOptions([...options, { id: id, content: "New Option" }]);
  };

  const deleteOption = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  const submitQuestion = async (formData) => {
    // console.log(formData);
    let questionId = null;

    await fetch("http://localhost:3001/questions", {
      method: "POST",
      body: JSON.stringify({
        title: formData.questionTitle,
        difficulty: formData.difficulty,
        classModelId: props.classId,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => (questionId = res));

    fetch("http://localhost:3001/answers", {
      method: "POST",
      body: JSON.stringify({
        options: formData.options,
        correctOptionId: currentAnswer,
        questionId: questionId,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <form className="block py-4 pb-10" onSubmit={handleSubmit(submitQuestion)}>
      <div className="flex flex-wrap content-start p-6 mx-auto bg-white border-2 border-gray-400 rounded-lg">
        <div className="items-center w-full pb-10 border-b-2 border-gray-400 h-1/6 grid grid-cols-2">
          <input
            type="text"
            className="w-auto text-2xl text-left border-b-2 text-rmit-blue focus:border-blue-400 focus:outline-none"
            placeholder="New Question"
            {...register("questionTitle")}
          />

          <select
            {...register("difficulty")}
            className="inline-block w-1/2 px-2 py-1 border place-self-end transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="w-full pt-10 pb-3 text-xl">
          {options.map((item, index) => {
            return (
              <div key={index} className="py-1 transition-all">
                <div className="flex items-center">
                  <RadioButton
                    isSelected={item.id === Number(currentAnswer)}
                    toggleCheckBtn={selectOption}
                    optionId={item.id}
                  />
                  <input
                    type="text"
                    className="inline-block w-2/3 ml-10 border-b-2 focus:border-blue-400 focus:outline-none"
                    placeholder={item.content}
                    {...register(`options[${item.id}]`)}
                  />
                  <div className="flex items-center flex-grow grid">
                    <input type="hidden"></input>
                    <button
                      className="text-red-500 cursor-pointer place-self-end"
                      type="submit"
                    >
                      <AiFillDelete
                        onClick={() => {
                          deleteOption(item.id);
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-5">
            <div
              className="inline-block p-1 px-3 ml-10 border border-gray-400 rounded-md hover:bg-gray-200 focus:outline-nones"
              onClick={addOption}
            >
              + Add option
            </div>
          </div>
        </div>

        <div className="flex justify-end w-full py-5">
          <div
            className="inline-block px-5 py-1 mx-3 text-white cursor-pointer rounded-md bg-rmit-red"
            onClick={props.toggleCard}
          >
            Cancel
          </div>
          <button
            className="inline-block px-5 py-1 text-white bg-green-400 cursor-pointer rounded-md"
            type="submit"
          >
            Save question
          </button>
        </div>
      </div>
    </form>
  );
};

AddQuestionCard.propTypes = {
  toggleCard: PropTypes.func.isRequired,
  classId: PropTypes.string.isRequired,
};

export default AddQuestionCard;
