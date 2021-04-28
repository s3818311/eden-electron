import React from "react";
import NavTab from "../components/navtab";
import PropTypes from "prop-types";
import List from "../components/class_list";
import Participants from "../components/class_participant";
import Result from "../components/class_result";


const Class = (props) => {
  return (
    <div className="flex flex-col w-9/12 h-screen px-10 pb-10">
      <div className="flex items-center h-1/6">
        <div className="text-3xl text-rmit-blue">
          Exam Manager | {props.className}
        </div>
      </div>
      <NavTab class={props.className} />
      <div className="flex-grow pt-2 overflow-y-scroll h-60">
        <div className="flex flex-row flex-wrap">
          {
            props.tabName === "list" && <List />
          }
          {
            props.tabName === "participant" && <Participants />
          }
          {
            props.tabName === "result" && <Result />
          }
        </div>
      </div>
    </div>
  );
};

Class.propTypes = {
  tabName : PropTypes.string.isRequired,
  className : PropTypes.string.isRequired,
};

export default Class;