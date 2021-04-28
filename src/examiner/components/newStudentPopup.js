import React, {useState} from "react";
import PropTypes from "prop-types";
import Loading from "../components/loading";
// import { useForm } from "react-hook-form";
import useFetch from "react-fetch-hook";
import {AiFillFileText} from "react-icons/ai";


const NewStudentPopup = (props) => {
  const [currentFile, setFile] = useState(props.currentFile);

  const getStudentFileList = useFetch("http://localhost:3001/file/studentFiles.json", {
    formatter: (response) => response.text(),
  });

  const renderFileList = () => {
    return getStudentFileList.isLoading
      ? <Loading></Loading>
      : JSON.parse(getStudentFileList.data).map((item, index) => {
        return (
          <div key={index} className={`flex flex-col items-center cursor-pointer text-rmit-blue ${currentFile===item.filename && "bg-rmit-blue bg-opacity-10"}`}
            onClick={()=>setFile(item.filename)}>
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
        <form>
          <div className="p-5 grid gap-y-5 gap-x-7 grid-cols-2">
            <div className="text-lg text-center col-span-2">{props.text}</div>
            <div className="grid grid-cols-3 col-span-2">
              {renderFileList()}
            </div>
            <button onClick={props.closePopup} className="inline-block px-5 py-1 text-center text-white bg-red-500 cursor-pointer rounded-md">
              Close
            </button>
            <button className="inline-block px-5 py-1 text-center text-white bg-green-500 cursor-pointer rounded-md" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

NewStudentPopup.propTypes = {
  text: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
  currentFile: PropTypes.string.isRequired
};

export default NewStudentPopup;
