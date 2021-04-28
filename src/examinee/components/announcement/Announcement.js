import React, { useState } from "react";
import Message from "./Message";
import { FaBars } from "react-icons/fa";

function Announcement() {
  const [showMessage, setShowMessage] = useState(false);

  const onButtonClickHandler = () => {
    setShowMessage(!showMessage);
  };

  return (
    <>
      {showMessage && <Message />}
      <div className="fixed right-0 bottom-0 p-8 ">
        <button
          className="h-12 w-12 rounded-md  text-white bg-rmit-blue text-3xl leading-10 cursor-pointer "
          onClick={onButtonClickHandler}
        >
          <FaBars className="mx-auto" />
        </button>
      </div>
    </>
  );
}
export default Announcement;
