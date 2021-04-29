import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


//Component for class tabs in exam manager

const NavTab = (props) => {

  const TabItems = [
    {
      "title": "Start exam",
      "path": "/class/"+ props.class +"/start"
    },
    {
      "title": "Students",
      "path":"/class/" + props.class +"/students"
    },
    {
      "title": "Results",
      "path":"/class/" + props.class + "/result"
    }
  ];

  return (
    <div className="flex h-13">
      {
        TabItems.map((item, index)=>{
          return (
            <NavLink
              exact
              key={index}
              to={item.path}
              className="w-32 py-2 text-center border-b-2 rounded-t-lg shadow-inner border-rmit-red bg-rmit-blue bg-opacity-10 text-rmit-blue"
              activeClassName="bg-opacity-20 border-opacity-0">
              {item.title}
            </NavLink>
          );
        })
      }

      <div className="flex flex-auto border-b-2 border-rmit-red">
      </div>
    </div>
  );
};


NavTab.propTypes = {
  class : PropTypes.string.isRequired,
};

export default NavTab;
