import React from "react";
import PropTypes from "prop-types";
import Question from "../components/question";

const Exam = (props) => {
  return (
    <div className="flex flex-col w-9/12 h-screen px-10 pb-10">
      <div className="flex items-center flex-shrink-0 h-32 border-b-2 border-rmit-red">
        <div className="text-3xl text-rmit-blue">
          Exam Manager | {props.examName}
        </div>
      </div>
      <div className="flex justify-end w-full py-2">
        <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red">
            Add new question
        </div>
      </div>

      <div className="px-10 py-3 overflow-auto">
        <div className="px-16 border-2 border-gray-400 rounded-md">
          <div className="flex items-center h-20  py-2 border-b-2 border-rmit-blue">
            <div className="text-3xl text-left text-rmit-blue">
                Exam title
            </div>
            <div className="flex-grow px-3">
              <input className="flex-grow w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                type="text" name="examTitle" id="" placeholder="Title"/>
            </div>
          </div>

          <div className="flex h-auto py-2">
            <div className="text-2xl text-left text-rmit-blue">
            Instruction
            </div>
            <div className="flex-grow px-6">
              <textarea className="flex-grow w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all" name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>

        <Question />
      </div>
    </div>
  );
};

Exam.propTypes= {
  examName: PropTypes.string.isRequired
};

export default Exam;
