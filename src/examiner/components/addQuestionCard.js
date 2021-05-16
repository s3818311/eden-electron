import React,{useState} from "react";
import PropTypes from "prop-types";
import RadioButton from "./RadioButton";

const AddQuestionCard = (props) => {

  // eslint-disable-next-line no-unused-vars
  const [currentAnswer, setCorrectAnswer] = useState(1);

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
            placeholder="New Question"
          />

          <select name="difficulty" id="" className="inline-block w-1/2 px-2 py-1 border place-self-end transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option value="easy"> Easy</option>
            <option value="intermediate"> Intermediate</option>
            <option value="hard"> Hard</option>
          </select>
        </div>

        <div className="w-full pt-10 pb-3 text-xl ">
          <div className="py-1 transition-all">
            <div className="flex items-center ">
              <RadioButton
                isSelected={false}
                toggleCheckBtn={selectOption}
                optionId={0}/>
              <input
                type="text"
                className="inline-block w-2/3 ml-10 border-b-2 focus:border-blue-400 focus:outline-none"
                placeholder="Option"
              />
            </div>
          </div>

          <div className="pt-1">
            <button className="p-1 ml-10 border border-black rounded-md hover:bg-gray-200 focus:outline-nones">
              + Add option
            </button>
          </div>
        </div>

        <div className="flex justify-end w-full py-5">
          <div className="inline-block px-5 py-1 mx-3 text-white cursor-pointer rounded-md bg-rmit-red" onClick={props.toggleCard}>
                Cancel
          </div>
          <div className="inline-block px-5 py-1 text-white bg-green-400 cursor-pointer rounded-md" onClick={props.toggleCard}>
                Save changes
          </div>
        </div>
      </div>
    </div>
  );
};

AddQuestionCard.propTypes = {
  toggleCard: PropTypes.func.isRequired
};

export default AddQuestionCard;
