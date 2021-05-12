import React from "react";
import PropTypes from "prop-types";
import useFetch from "react-fetch-hook";
import Loading from "../components/loading";
import { useForm } from "react-hook-form";

const SelectParticipants = (props) => {
  const { register } = useForm();

  const renderStudentList = () => {
    const { isLoading, data } = useFetch("http://localhost:3001/studentInClass/" + props.classId);

    return isLoading
      ? <Loading />
      : data.map((ele, index) => (
        <div key={index} className="flex flex-row items-center">
          <input type="checkbox" className="w-4 h-5" {...register(ele.name)} />
          <div className="inline-block px-2 text-lg">{ele.name}</div>
        </div>
      ));
  };

  return (
    <div className="h-52">
      <div className="w-2/3 h-full pt-2 pl-5 mx-auto overflow-auto border border-gray rounded-md">
        {renderStudentList()}
      </div>
    </div>
  );
};

SelectParticipants.propTypes = {
  classId : PropTypes.string.isRequired,
};

export default SelectParticipants;
