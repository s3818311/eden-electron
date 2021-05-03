import React from "react";
import NavTab from "../components/navtab";
import PropTypes from "prop-types";
import StartExam from "../components/class_startexam";
import Students from "../components/class_student";
import Result from "../components/class_result";


const Class = (props) => {
  return (
    <div className="flex flex-col w-9/12 h-screen px-10 pb-10">
      <div className="flex items-center flex-shrink-0 h-32">
        <div className="text-3xl text-rmit-blue">
          Class Manager | {props.className}
        </div>
      </div>
      <NavTab class={props.className} />
      <div className="flex flex-col flex-grow overflow-y-auto">
        {props.tabName === "exam" && <StartExam />}
        {props.tabName === "students" && <Students class={props.className} />}
        {props.tabName === "result" && <Result />}
      </div>
    </div>
  );
};

Class.propTypes = {
  tabName : PropTypes.string.isRequired,
  className : PropTypes.string.isRequired,
};

export default Class;
