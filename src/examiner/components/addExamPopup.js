import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const ExamPopup = (props) => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25">
        <div className="relative w-1/3 h-auto m-auto overflow-auto bg-white rounded-lg top-1/4">
          <form onSubmit={handleSubmit(props.onSubmitFunc)}>
            <div className="p-5 grid gap-y-5 gap-x-7 grid-cols-2">
              <div className="text-lg text-center col-span-2">{props.text}</div>
              <div className="flex flex-row col-span-2">
                <div className="py-1 pr-3 text-center">Exam name</div>
                <input
                  type="text"
                  className="flex-grow px-3 py-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  {...register("examName")}
                ></input>
              </div>
              <div onClick={props.closePopup} className="inline-block px-5 py-1 text-center text-white bg-red-500 cursor-pointer rounded-md">
              Close
              </div>
              <button className="inline-block px-5 py-1 text-center text-white bg-green-500 cursor-pointer rounded-md" type="submit">
              Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ExamPopup.propTypes = {
  text : PropTypes.string.isRequired,
  closePopup : PropTypes.func.isRequired,
  onSubmitFunc: PropTypes.func.isRequired
};

export default ExamPopup;
