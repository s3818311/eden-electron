import React from "react";
import { Link } from "react-router-dom";

const Text = () => {
  return (
    <div className="flex-grow h-1/4 px-10 pb-10">
      <div className="flex items-center border-b-2 pt-10 pb-10 border-rmit-red">
        <div className="text-3xl text-rmit-blue">
          Personal Information Confirmation
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <div className="px-10 pb-10">
      <div className="border-2 border-black mx-auto p-6 bg-white rounded-lg">
        <div className="flex items-center border-b-2 h-1/6 w-full pb-10 border-black">
          <div className="text-3xl text-rmit-blue w-1/3 text-left">
            Examinee Personal Information
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-2/3 ">
            <img
              className="rounded-lg h-24 w-24 m-auto block align-middle"
              src="https://i.imgur.com/wnuKAT5.jpg"
              alt="examinee-image"
            ></img>
          </div>
          <div className="w-1/3 text-center">
            <div>Vo Thanh Luan</div>
            <div>13/12/2001</div>
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
          <Link to="/question">
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
    <div className="w-full h-full ">
      <Text />
      <Form />
      <Button />
    </div>
  );
};

export default InfoPageComponent;
