import React from "react";
import NavTab from "../components/navtab";
import PropTypes from "prop-types";
import StartExam from "../components/class_startexam";
import Students from "../components/class_student";
import Result from "../components/class_result";
import QuestionBank from "../components/class_questions";
import useFetch from "react-fetch-hook";
import Loading from "../components/loading";


const Class = (props) => {
  const { isLoading, data } = useFetch("http://localhost:3001/classes/" + props.classId);

  return isLoading
    ? <Loading />
    : (
      <div className="flex flex-col flex-grow h-screen px-10 pb-10">
        <div className="flex items-center flex-shrink-0 h-32">
          <div className="text-3xl text-rmit-blue">
          Class Manager | {data.name}
          </div>
        </div>
        <NavTab class={props.classId} />
        <div className="flex flex-col flex-grow overflow-y-auto">
          {props.tabName === "exam" && <StartExam classId={props.classId} />}
          {props.tabName === "students" && <Students classId={props.classId} />}
          {props.tabName === "result" && <Result />}
          {props.tabName === "questions" && <QuestionBank />}
        </div>
      </div>
    );
};

Class.propTypes = {
  tabName : PropTypes.string.isRequired,
  classId : PropTypes.string.isRequired,
};

export default Class;
