import React from "react";
import Instruction from "../text/Instruction";
import Spinner from "../button/Spinner";

import InfoExaminee from "../text/InfoExaminee";

const InstructionPage = () => {
  return (
    <div className="flex h-full">
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-2/3 h-full px-10">
          <div className="flex items-center h-1/3">
            <InfoExaminee />
          </div>
          <div className="flex items-center h-2/3">
            <Instruction />
          </div>
        </div>

        <div className="flex flex-col justify-center w-1/3 h-full px-10">
          <div className="flex items-center w-full h-1/3">
            <div className="text-2xl">Not your info?</div>
            <button
              type="submit"
              className="h-12 px-4 py-2 mx-auto font-bold text-white rounded bg-rmit-red hover:bg-rmit-red-bold focus:border-none"
            >
              Go Back
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-2/3">
            <Spinner />
            <div className="pt-5">Please wait for other students to join</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;
