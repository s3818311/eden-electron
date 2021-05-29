import React from "react";
import PropTypes from "prop-types";

function Text(props) {
  return (
    <div className="flex-grow px-10 pb-10 h-1/4">
      <div className="flex items-center pt-10 pb-10 border-b-2 border-rmit-red">
        <div
          className={
            props.subTitle
              ? "text-3xl text-rmit-blue text-left w-1/3"
              : "text-3xl text-rmit-blue text-left "
          }
        >
          {props.title}
        </div>
        <div className="w-1/3 text-3xl text-right text-rmit-blue">
          {props.subTitle}
        </div>
      </div>
    </div>
  );
}
Text.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Text;
