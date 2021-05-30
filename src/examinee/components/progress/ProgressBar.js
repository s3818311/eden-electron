import React from "react";

const ProgressBar = () => {
  return (
    <div className="relative px-10 pt-1">
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="inline-block px-2 py-1 text-xs font-semibold text-white uppercase rounded-full bg-rmit-red">
            Exam in progress
          </span>
        </div>
        <div className="text-right">
          <span className="inline-block text-xs font-semibold text-rmit-red">
            30%
          </span>
        </div>
      </div>
      <div className="flex h-2 mb-4 overflow-hidden text-xs bg-pink-200 rounded">
        <div
          style={{ width: "30%" }}
          className="flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap bg-rmit-red-bold"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
