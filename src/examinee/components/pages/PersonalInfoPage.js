import React from "react";
import { Link } from "react-router-dom";
import Text from "../text/Text";

const Form = () => {
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

const Button = () => {
  return (
    <div className="w-full flex px-20">
      <div className="w-full flex mt-auto mb-20">
        <div className="w-1/2 flex justify-start">
          <Link to="/login">
            <button
              type="submit"
              className="bg-rmit-red hover:bg-rmit-red-bold text-white font-bold focus:border-none px-4 py-2 rounded"
            >
              Go back to Login page
            </button>
          </Link>
        </div>
        <div className="w-1/2 flex justify-end">
          <Link to="/instruction">
            <button
              type="submit"
              className="bg-rmit-red hover:bg-rmit-red-bold text-white font-bold focus:border-none px-4 py-2 rounded"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const InfoPageComponent = () => {
  return (
    <div className="w-full h-full">
      <Text title="Personal Information Confirmation" />
      <Form />
      <Button />
    </div>
  );
};

export default InfoPageComponent;
