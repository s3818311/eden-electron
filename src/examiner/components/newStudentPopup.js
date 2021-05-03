import React from "react";
import PropTypes from "prop-types";
import Loading from "../components/loading";
// import { useForm } from "react-hook-form";
import useFetch from "react-fetch-hook";
import {AiFillFileText} from "react-icons/ai";


const NewStudentPopup = (props) => {
  let studentFiles = useFetch("http://localhost:3001/file/studentFiles.json");

  const renderFileList = () => {
    return studentFiles.isLoading
      ? <Loading className="col-span-3" />
      : studentFiles.data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center py-2 cursor-pointer text-rmit-blue hover:bg-rmit-blue hover:bg-opacity-10 transition-all"
            onClick={props.selectFunc}
            id={item.filename}
          >
            <div className="text-5xl">
              <AiFillFileText />
            </div>
            <div className="text-sm">
              {item.filename}
            </div>
          </div>
        );
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25">
      <div className="relative w-1/3 h-auto m-auto overflow-auto bg-white rounded-lg top-1/4">
        <div className="p-5 grid gap-y-5 gap-x-7">
          <div className="text-lg text-center">Select a student list</div>
          <div className={studentFiles.isLoading ? "flex pb-10" : "grid grid-cols-3"}>
            {renderFileList()}
          </div>
          <button onClick={props.closePopup} className="inline-block px-5 py-1 text-center text-white bg-red-500 cursor-pointer rounded-md">
              Close
          </button>
        </div>
      </div>
    </div>
  );
};

NewStudentPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  selectFunc: PropTypes.func.isRequired,
};

export default NewStudentPopup;
