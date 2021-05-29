import React, { useState } from "react";
import Message from "./Message";
import { FaBars } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";

function Announcement() {
  const [showMessage, setShowMessage] = useState(false);

  const onButtonClickHandler = () => {
    setShowMessage(!showMessage);
  };

  return (
    <>
      {showMessage && <Message />}
      <div className="fixed bottom-0 right-0 p-8">
        <GoPrimitiveDot className="absolute h-6 mt-auto ml-auto text-rmit-red right-6 bottom-16" />
        <button
          className="w-12 h-12 text-3xl text-white cursor-pointer rounded-md bg-rmit-blue leading-10"
          onClick={onButtonClickHandler}
        >
          <FaBars className="mx-auto" />
        </button>
      </div>
    </>
  );
}
export default Announcement;
