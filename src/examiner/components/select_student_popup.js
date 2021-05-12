import React from "react";
import PropTypes from "prop-types";
import Loading from "./loading";
import useFetch from "react-fetch-hook";

const SelectStudent = (props) => {
  let fetchResult = useFetch(`http://localhost:3001/studentInClass/not/${props.classId}`);

  const renderStudents = () => {
    return fetchResult.isLoading ? (
      <Loading className="col-span-3" />
    ) : (
      fetchResult.data.map((student, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-2 cursor-pointer text-rmit-blue hover:bg-rmit-blue hover:bg-opacity-10 transition-all"
          onClick={props.selectFunc}
          id={student.id}
        >
          <div className="text-center">{student.id}</div>
          <div className="text-center">{student.name}</div>
        </div>
      ))
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25">
      <div className="relative w-1/3 m-auto overflow-auto bg-white rounded-lg h-96 top-1/4">
        <div className="p-5 grid gap-y-5 gap-x-7">
          <div className="text-xl text-center">Select students</div>
          <div className={fetchResult.isLoading ? "flex pb-10" : "grid grid-cols-3"}>
            {renderStudents()}
          </div>
          <button
            onClick={props.closePopup}
            className="inline-block px-5 py-1 text-center text-white bg-red-500 cursor-pointer rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

SelectStudent.propTypes = {
  closePopup: PropTypes.func,
  selectFunc: PropTypes.func,
  classId: PropTypes.string.isRequired,
};

export default SelectStudent;
