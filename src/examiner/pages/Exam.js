import React from "react";

const Exam = () => {
  return (
    <div className="flex-grow h-screen px-10 pb-10">
      <div className="flex items-center border-b-2 h-1/6 border-rmit-red">
        <div className="text-3xl text-rmit-blue">
          Exam Manager
        </div>
      </div>
      <div className="pt-2 h-5/6">
        <div className="flex justify-end w-full">
          <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red">
            Add new class
          </div>
        </div>

        <div className="flex flex-row flex-wrap">

        </div>
      </div>
    </div>
  );
};

export default Exam;
