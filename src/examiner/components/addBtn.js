import React, { useRef } from "react";

const AddBtn = () => {
  const inputFile = useRef(null); 
  const onButtonClick = () => inputFile.current.click();

  return (
    <>
      <input type="file" id="file" ref={inputFile} className="hidden"/>
      <label htmlFor="file">
        <div onClick={onButtonClick} className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red">
        Add new file
        </div>
      </label>
    </>
  );
};

export default AddBtn;