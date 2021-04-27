import React from "react";

const InfoForm = () => {
  return (
    <div className="px-10 pb-10">
      <div className="border-2 border-black mx-auto p-6 bg-white rounded-lg">
        <div className="flex items-center border-b-2 h-1/6 w-full pb-10 border-black">
          <div className="text-3xl text-rmit-blue w-1/3 text-left">
            Examinee Personal Information
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3 flex items-center justify-center">
            <img
              className="rounded-lg w-1/2 h-1/2 block mx-auto "
              src="https://i.imgur.com/wnuKAT5.jpg"
              alt="examinee-image"
            ></img>
          </div>

          <div className="w-2/3 flex items-center justify-center">
            <div className="mx-auto">
              <div>Name: Vo Thanh Luan</div>
              <div>Date of Birth: 13/12/2001</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoForm;
