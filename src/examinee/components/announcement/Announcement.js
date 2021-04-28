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
      <div className="fixed right-0 bottom-0 p-8">
        <GoPrimitiveDot className="text-rmit-red h-6 ml-auto mt-auto absolute right-6 bottom-16" />
        <button
          className="h-12 w-12 rounded-md text-white bg-rmit-blue text-3xl leading-10 cursor-pointer "
          onClick={onButtonClickHandler}
        >
          <FaBars className="mx-auto" />
        </button>
      </div>
    </>
  );
}
export default Announcement;
