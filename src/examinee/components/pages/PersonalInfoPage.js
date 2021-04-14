import React from "react";

const Text = () => {
  return (
    <div className="text-left w-full flex px-20">
      <p className="text-rmit-blue">Personal Information Confirmation</p>
    </div>
  );
};
const Button = () => {
  return (
    <div className="w-full h-full flex px-20">
      <div className="h-10 w-full flex mt-auto mb-20">
        <div className="w-1/2 flex justify-start">
          <button
            type="submit"
            className="bg-rmit-red hover:bg-rmit-red-bold text-white font-bold focus:border-none px-4 py-2 rounded"
          >
              Go back to Login page
          </button>
        </div>
        <div className="w-1/2 flex justify-end">
          <button
            type="submit"
            className="bg-rmit-red hover:bg-rmit-red-bold text-white font-bold focus:border-none px-4 py-2 rounded"
          >
              Next
          </button>
        </div>
      </div>
    </div>
  );
};

const InfoPageComponent = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Text />
      <Button />
    </div>
  );
};

export default InfoPageComponent;
