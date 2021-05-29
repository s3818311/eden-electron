import React from "react";

function Instruction() {
  return (
    <div className="w-full px-12 py-5 mx-auto bg-white border-2 border-black rounded-lg">
      <div className="flex items-center w-full pb-5 border-b-2 border-black h-1/6">
        <div className="w-1/3 text-3xl text-left text-rmit-blue">
          Instruction
        </div>
      </div>
      <ol className="px-10 pt-5 overflow-y-scroll text-2xl text-justify list-decimal">
        <li>
          There are 9 pages and 2 questions in this exam. You must answer both
          questions one and two.
        </li>
        <li>
          Read the questions carefully and confine your responses to an analysis
          of the questions as written. Do not assume any facts not set forth in
          the questions.
        </li>
        <li>
          You have two hours to complete the exam. I have given suggested times
          for each question, leaving one half hour to spare. You may allocate
          your time as you wish. I recommend that you spend some time organizing
          your thoughts before you begin to write and that you reserve some time
          to go over your responses after you have completed the exam.
        </li>
      </ol>
    </div>
  );
}
export default Instruction;
