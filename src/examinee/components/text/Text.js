import React from "react";
import PropTypes from "prop-types";
import "../pages/InstructionPage";
import "../pages/PersonalInfoPage";

function Text(props) {
  return (
    <div className="flex-grow h-1/4 pb-10 w-full">
      <div className="flex items-center border-b-2 pt-10 pb-10 border-rmit-red">
        <div className="text-3xl text-rmit-blue">{props.title}</div>
      </div>
    </div>
  );
}
Text.propTypes = {
  title: PropTypes.func.isRequired,
};

export default Text;
