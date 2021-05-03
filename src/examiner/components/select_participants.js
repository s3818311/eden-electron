import React from "react";
import useFetch from "react-fetch-hook";
import Loading from "../components/loading";
import { useForm } from "react-hook-form";

const SelectParticipants = () => {
  const { register } = useForm();

  const renderStudentList = () => {
    const { isLoading, data } = useFetch("http://localhost:3001/file/student1.csv", {
      formatter: (response) => response.text(),
    });

    return isLoading
      ? <Loading />
      : data.split("\n").map((line, index) => {
        const studentInfo = line.split(",");
        return (
          <div key={index} className="flex flex-row items-center">
            <input type="checkbox" className="w-4 h-5" {...register(studentInfo[1])} />
            <div className="inline-block px-2 text-lg">{studentInfo[1]}</div>
          </div>
        );
      });
  };

  return (
    <div className="h-52">
      <div className="w-2/3 h-full pt-2 pl-5 mx-auto overflow-auto border border-gray rounded-md">
        {renderStudentList()}
      </div>
    </div>
  );
};

export default SelectParticipants;
