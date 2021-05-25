import React from "react";

function ShortAnswer() {
  return (
    <div className="px-10 pb-10">
      <div className="border-2 border-black mx-auto flex p-6 bg-white rounded-lg flex-wrap content-start">
        <div className="flex items-center border-b-2 h-1/6 w-full pb-10 border-black">
          <div className="text-3xl text-rmit-blue w-1/3 text-left">
            Question 2
          </div>
        </div>
        <div className="mb-3 pt-10 w-full">
          <input
            type="text"
            placeholder="Your answer"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ShortAnswer;
