import React from "react";
import Text from "../text/Title";
import Instruction from "../text/Instruction";
import Spinner from "../button/Spinner";

const InstructionPage = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center p-36">
      <Text title="Instruction" />
      <div className="w-1/2">
        <Instruction />
      </div>
      <div className="w-1/2 flex justify-center ">
        <Spinner />
      </div>
    </div>
  );
};

export default InstructionPage;
