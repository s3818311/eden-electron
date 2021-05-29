import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BottomButton(props) {
  const { isPrevButton, isNextButton } = props;
  return (
    <div className="flex w-full px-20">
      <div className="flex w-full mt-auto mb-20">
        <div className="flex justify-start w-1/2">
          <Link to="/login">
            {!isPrevButton ? (
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white rounded bg-rmit-red hover:bg-rmit-red-bold focus:border-none"
              >
                {props.prevButton}
              </button>
            ) : null}
          </Link>
        </div>
        <div className="flex justify-end w-1/2">
          <Link to="/instruction">
            {!isNextButton ? (
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white rounded bg-rmit-red hover:bg-rmit-red-bold focus:border-none"
              >
                {props.nextButton}
              </button>
            ) : null}
          </Link>
        </div>
      </div>
    </div>
  );
}

BottomButton.propTypes = {
  prevButton: PropTypes.func.isRequired,
  nextButton: PropTypes.func.isRequired,
  isPrevButton: PropTypes.bool,
  isNextButton: PropTypes.bool,
};

export default BottomButton;
