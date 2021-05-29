/* eslint-disable tailwind/class-order */
import React from "react";

const InfoExaminee = () => {
  return (
    <div className="w-full border-2 border-black mx-auto px-12 py-5 bg-white rounded-lg text-2xl">
      <div className="flex items-center border-b-2 h-1/6 w-full pb-5 border-black">
        <div className="text-3xl text-rmit-blue w-1/3 text-left">
          Examinee Info
        </div>
      </div>
      <div className="pt-5">
        <div className="text-left w-1/2 inline-block">Student Id</div>
        <span className="text-right w-1/2 inline-block">s3822042</span>
      </div>
      <div>
        <div className="text-left w-1/2 inline-block">Name</div>
        <span className="text-right w-1/2 inline-block">Vo Thanh Luan</span>
      </div>
      <div>
        <div className="text-left w-1/2 inline-block">Date of Birth</div>
        <span className="text-right w-1/2 inline-block">13/12/2001</span>
      </div>
    </div>
  );
};

export default InfoExaminee;
