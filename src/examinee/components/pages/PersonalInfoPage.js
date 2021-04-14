import React from "react";


const InfoPageComponent = () => {
  return (
    <div className="w-full">
      <div>
        <div>
          <button
            type="submit"
            className="bg-rmit-red hover:bg-rmit-red-bold text-white font-bold mx-auto w-full py-2 px-4 rounded focus:border-none"
          >
            Go back to Login page
          </button>
          <button
            type="submit"
            className="bg-rmit-red hover:bg-rmit-red-bold text-white font-bold mx-auto w-full py-2 px-4 rounded focus:border-none"
          >Next</button>
        </div>
        <div></div>
      </div>
    </div>
  );

};


export default InfoPageComponent;
