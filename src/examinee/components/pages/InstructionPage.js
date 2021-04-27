import React from "react";
import Text from "../text/Title";
import Instruction from "../text/Instruction";
import Spinner from "../button/Spinner";

const InstructionPage = () => {
  return (
    <div className="w-full flex flex-wrap px-10">
      <Text title="Instruction" />
      <di className="w-full flex flex-wrap justify-center items-center">
        <div className="w-1/2 px-10">
          <Instruction />
        </div>

        <div className="w-1/2 flex justify-center ">
          <Spinner />
        </div>
      </di>
    </div>
  );
};

export default InstructionPage;
