import React from "react";
import PropTypes from "prop-types";
import Loading from "../components/loading";

const SelectParticipants = (props) => {
  const renderStudentList = () => {
    return props.studentFetch.isLoading ? (
      <Loading />
    ) : (
      props.studentFetch.data.map((ele, index) => (
        <div key={index} className="flex flex-row items-center">
          <input
            type="checkbox"
            className="w-4 h-5"
            {...props.register("students[]")}
            value={ele.id}
            defaultChecked={true}
          />
          <div className="inline-block px-2 text-lg">{ele.name}</div>
        </div>
      ))
    );
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
  studentFetch: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};

export default SelectParticipants;
