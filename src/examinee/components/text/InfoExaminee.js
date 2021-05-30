/* eslint-disable tailwind/class-order */
import React from "react";
import PropTypes from "prop-types";

const InfoExaminee = (props) => {
  return (
    <div className="w-full px-12 py-5 mx-auto text-2xl bg-white border-2 border-black rounded-lg">
      <div className="flex items-center w-full pb-5 border-b-2 border-black h-1/6">
        <div className="w-1/3 text-3xl text-left text-rmit-blue">
          Examinee Info
        </div>
      </div>
      <div className="pt-5">
        <div className="inline-block w-1/2 text-left">Student Id</div>
        <span className="inline-block w-1/2 text-right">{props.id}</span>
      </div>
      <div>
        <div className="inline-block w-1/2 text-left">Name</div>
        <span className="inline-block w-1/2 text-right">{props.name}</span>
      </div>
      <div>
        <div className="inline-block w-1/2 text-left">Date of Birth</div>
        <span className="inline-block w-1/2 text-right">
          {new Date(props.dob).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

InfoExaminee.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
};

export default InfoExaminee;
