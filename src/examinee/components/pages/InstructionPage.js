import React from "react";
import Instruction from "../text/Instruction";
import Spinner from "../button/Spinner";

import InfoExaminee from "../text/InfoExaminee";

const InstructionPage = () => {
  return (
    <div className="flex h-full">
      <div className="w-full flex justify-center items-center h-full">
        <div className="w-2/3 px-10 h-full">
          <div className="h-1/3 flex items-center">
            <InfoExaminee />
          </div>
          <div className="h-2/3 flex items-center">
            <Instruction />
          </div>
        </div>

        <div className="w-1/3 flex justify-center h-full px-10 flex-col">
          <div className="h-1/3 w-full flex items-center">
            <div className="text-2xl">Not your info?</div>
            <button
              type="submit"
              className="bg-rmit-red hover:bg-rmit-red-bold text-white font-bold focus:border-none px-4 py-2 rounded mx-auto h-12"
            >
              Go Back
            </button>
          </div>
          <div className="h-2/3 w-full flex items-center justify-center flex-col">
            <Spinner />
            <div className="pt-5">Please wait for other students to join</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;
