import React from "react";
import PropTypes from "prop-types";

const RadioButton = (props) => {
  return (
    <div
      className="flex items-center justify-center w-6 h-6 border border-black rounded-full"
      onClick={props.toggleCheckBtn}
      id={props.optionId}
    >
      {props.isSelected && (
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      )}
    </div>
  );
};

RadioButton.propTypes = {
  toggleCheckBtn: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  optionId: PropTypes.number.isRequired,
};

export default RadioButton;
