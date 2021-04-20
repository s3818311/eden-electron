import React from "react";
import PropTypes from "prop-types";

const ClassObj = (props) => {
  return (
    <>
      <div className="flex h-40 my-5 border border-gray-100 rounded-lg shadow-xl cursor-pointer mx-7 w-52">
        <div className="w-full mt-auto text-lg text-center">{props.name}</div>
      </div>
    </>
  );
};

ClassObj.propTypes = {
  name: PropTypes.string,
  loading: PropTypes.bool,
};

export default ClassObj;