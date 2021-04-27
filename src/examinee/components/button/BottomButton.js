import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BottomButton(props) {
  const { isQuestion } = props;
  return (
    <div className="w-full flex px-20">
      <div className="w-full flex mt-auto mb-20">
        <div className="w-1/2 flex justify-start">
          <Link to="/login">
            {!isQuestion ? (
              <button
                type="submit"
                className="bg-rmit-red hover:bg-rmit-red-bold text-white font-bold focus:border-none px-4 py-2 rounded"
              >
                {props.prevButton}
              </button>
            ) : null}
          </Link>
        </div>
        <div className="w-1/2 flex justify-end">
          <Link to="/instruction">
            <button
              type="submit"
              className="bg-rmit-red hover:bg-rmit-red-bold text-white font-bold focus:border-none px-4 py-2 rounded"
            >
              {props.nextButton}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

BottomButton.propTypes = {
  prevButton: PropTypes.func.isRequired,
  nextButton: PropTypes.func.isRequired,
  isQuestion: PropTypes.bool,
};

export default BottomButton;
