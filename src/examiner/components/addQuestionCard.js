/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import PropTypes from "prop-types";
import RadioButton from "./RadioButton";
import { AiFillDelete} from "react-icons/ai";


const AddQuestionCard = (props) => {

  // eslint-disable-next-line no-unused-vars
  const [currentAnswer, setCorrectAnswer] = useState(0);

  const [options, setOptions] = useState([
    {
      "id": 1,
      "content": "New option"
    }
  ]);

  const selectOption = (evt) => {
    const id = evt.target.id;
    setCorrectAnswer(id);
  };

  const addOption = () => {
    const id = options.length + 1;
    setOptions([...options, {"id": id, "content": "New Option"}]);
  };

  const deleteOption = (id) => {
    setOptions(options.filter(
      (option) => option.id !== id
    ));
  };

  return (
    <div className="py-4 pb-10">
      <div className="flex flex-wrap content-start p-6 mx-auto bg-white border-2 border-gray-400 rounded-lg">
        <div className="flex items-center w-full pb-10 border-b-2 border-gray-400 h-1/6 grid grid-cols-2">
          <input
            className="w-auto text-2xl text-left border-b-2 text-rmit-blue focus:border-blue-400 focus:outline-none"
            type="text"
            placeholder="New Question"
          />

          <select name="difficulty" id="" className="inline-block w-1/2 px-2 py-1 border place-self-end transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option value="easy"> Easy</option>
            <option value="medium"> Medium </option>
            <option value="hard"> Hard</option>
          </select>
        </div>

        <div className="w-full pt-10 pb-3 text-xl ">
          {options.map((item, index)=>{
            return(
              <div key = {index} className="py-1 transition-all">
                <div className="flex items-center ">
                  <RadioButton
                    isSelected={item.id === Number(currentAnswer)}
                    toggleCheckBtn={selectOption}
                    optionId={item.id}/>
                  <input
                    type="text"
                    className="inline-block w-2/3 ml-10 border-b-2 focus:border-blue-400 focus:outline-none"
                    placeholder={item.content}
                  />
                  <div className="flex items-center flex-grow grid">
                    <input type="hidden" ></input>
                    <button
                      className="text-red-500 cursor-pointer place-self-end"
                      type="submit"
                    ><AiFillDelete onClick={()=>{deleteOption(item.id);}}/></button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-5">
            <button className="p-1 ml-10 border border-gray-400 rounded-md hover:bg-gray-200 focus:outline-nones"
              onClick={()=>{addOption();}}>
              + Add option
            </button>
          </div>
        </div>

        <div className="flex justify-end w-full py-5">
          <div className="inline-block px-5 py-1 mx-3 text-white cursor-pointer rounded-md bg-rmit-red" onClick={props.toggleCard}>
                Cancel
          </div>
          <div className="inline-block px-5 py-1 text-white bg-green-400 cursor-pointer rounded-md" onClick={props.toggleCard}>
                Save question
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
