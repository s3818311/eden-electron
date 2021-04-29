import React from "react";
import useFetch from "react-fetch-hook";
import Loading from "../components/loading";


const SelectParticipants = () => {

  const {isLoading, data} = useFetch("http://localhost:3001/file/student1.csv", {
    formatter: (response) => response.text(),
  });

  const renderStudentList = () => {
    return isLoading ? <Loading /> :
      data.split("\n").map(
        (line, index) => {
          const fieldArray = line.split(",");
          return(
            <div key={index}>
              <input type="checkbox" checked name="" id=""/>
              <div className="inline-block px-2">
                {fieldArray[1]}
              </div>
            </div>
          );
        }
      );
  };

  return (
    <div className="p-2 border border-gray">
      <div className="overflow-auto h-52">
        {renderStudentList()}
      </div>
    </div>
  );
};

export default SelectParticipants;
