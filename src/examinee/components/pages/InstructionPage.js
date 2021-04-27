import React from "react";
import Text from "../text/Text";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Instruction = () => {
  return (
    <div className="w-1/2">
      <ol className="list-decimal text-justify text-2xl">
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
};

const LoadingIcon = () => {
  return (
    <div className="w-1/2 flex justify-center ">
      <div className="">
        <Loader type="Watch" color="#000054" height={300} width={300} />
      </div>
      {/* <div className="">Please wait for other student to join</div> */}
    </div>
  );
};

const InstructionPage = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center p-36">
      <Text title="Instruction"/>
      <Instruction />
      <LoadingIcon />
    </div>
  );
};

export default InstructionPage;
