import React from "react";
import NavTab from "../components/navtab";
import PropTypes from "prop-types";
import List from "../components/class_list";
import Participants from "../components/class_participant";
import Result from "../components/class_result";


const Class = ({tabName}) => {
  return (
    <div className="w-9/12 h-screen px-10 pb-10">
      <div className="flex items-center h-1/6">
        <div className="text-3xl text-rmit-blue">
          Class
        </div>
      </div>
      <NavTab/>
      <div className="pt-2 h-5/6">
        <div className="flex flex-row flex-wrap">
          {
            tabName === "list" && <List />
          }
          {
            tabName === "participant" && <Participants />
          }
          {
            tabName === "result" && <Result />
          }
        </div>
      </div>
    </div>
  );
};

Class.propTypes = {
  tabName : PropTypes.string
};

export default Class;
