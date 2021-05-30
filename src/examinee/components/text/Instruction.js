import React from "react";
import PropTypes from "prop-types";

const Instruction = (props) => {
  return (
    <div className="w-full px-12 py-5 mx-auto bg-white border-2 border-black rounded-lg">
      <div className="flex items-center w-full pb-5 border-b-2 border-black h-1/6">
        <div className="w-1/3 text-3xl text-left text-rmit-blue">
          Instruction
        </div>
      </div>
      <div className="px-10 pt-5 overflow-y-scroll text-2xl text-justify list-decimal">
        {props.instruction}
      </div>
    </div>
  );
};

Instruction.propTypes = {
  instruction: PropTypes.string.isRequired,
};

export default Instruction;
