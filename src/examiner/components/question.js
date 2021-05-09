import React from "react";

const Question = () => {
  return (
    <div className="py-4 pb-10">
      <div className="flex flex-wrap content-start p-6 mx-auto bg-white border-2 border-black rounded-lg">
        <div className="flex items-center w-full pb-10 border-b-2 border-black h-1/6">
          <div className="w-1/3 text-2xl text-left text-rmit-blue">
            Question 1
          </div>
        </div>

        <div className=" w-full pt-10 pb-3 text-xl ">
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
          <div className="pt-1">
            <button className="p-1 ml-10 border border-black rounded-md">
              + Add option
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
