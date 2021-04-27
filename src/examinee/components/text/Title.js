import React from "react";
import PropTypes from "prop-types";

function Text(props) {
  return (
    <div className="flex-grow h-1/4 px-10 pb-10">
      <div className="flex items-center border-b-2 pt-10 pb-10 border-rmit-red">
        <div
          className={
            props.subTitle
              ? "text-3xl text-rmit-blue text-left w-1/3"
              : "text-3xl text-rmit-blue text-left "
          }
        >
          {props.title}
        </div>
        <div className="text-3xl text-rmit-blue w-1/3 text-right">
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
