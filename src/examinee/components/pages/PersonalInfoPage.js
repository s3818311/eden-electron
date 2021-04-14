import React from "react";

const InfoPageComponent = () => {
  return (
    <div className="w-full h-full flex px-40">
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

export default InfoPageComponent;
