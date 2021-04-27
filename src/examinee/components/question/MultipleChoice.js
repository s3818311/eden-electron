import React from "react";

const MultipleChoice = () => {
  return (
    <div className="px-10 pb-10">
      <div className="border-2 border-black mx-auto flex p-6 bg-white rounded-lg flex-wrap content-start ">
        <div className="flex items-center border-b-2 h-1/6 w-full pb-10 border-black">
          <div className="text-3xl text-rmit-blue w-1/3 text-left">
            Question 1
          </div>
        </div>

        <div className=" w-full pt-10 text-xl ">
          <div>
            <input type="radio" id="option-1" name="radio" value="option-1" />
            <label className="ml-10" htmlFor="option-1">
              Option 1
            </label>
          </div>
          <div>
            <input type="radio" id="option-1" name="radio" value="option-2" />
            <label className="ml-10" htmlFor="option-2">
              Option 2
            </label>
          </div>
          <div>
            <input type="radio" id="option-1" name="radio" value="option-3" />
            <label className="ml-10" htmlFor="option-3">
              Option 3
            </label>
          </div>
          <div>
            <input type="radio" id="option-1" name="radio" value="option-4" />
            <label className="ml-10" htmlFor="option-4">
              Option 4
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoice;
