import React from "react";
import AddBtn from "../components/addBtn";

const Student = () => {
  return (   
    <div className="flex-grow h-screen px-10 pb-10">
      <div className="flex items-center border-b-2 h-1/6 border-rmit-red">
        <div className="text-3xl text-rmit-blue">
          Student manager
        </div>
      </div>
      <div className="pt-2 h-5/6">
        <div className="flex justify-end w-full">
          <AddBtn></AddBtn>
        </div>

        <div className="flex flex-row flex-wrap">

        </div>
      </div>
    </div>
  );
};

export default Student;
