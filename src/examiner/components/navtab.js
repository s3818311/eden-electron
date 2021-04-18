import React from "react";
import { NavLink } from "react-router-dom";

//Component for class tabs in exam manager

const NavTab = () => {

  const TabItems = [
    {
      "title": "Exam list",
      "path": "/exam/class/list"
    },
    {
      "title": "Participants",
      "path":"/exam/class/participant"
    },
    {
      "title": "Results",
      "path":"/exam/class/result"
    }
  ];


  return (
    <div>
      <div className="flex h-1/6 ">

        {TabItems.map((item, index)=>{
          return(
            <NavLink key={index}
              exact to={item.path}
              className = "w-32 py-2 text-center border-b-2 rounded-t-lg shadow-inner shadow-sm border-rmit-red bg-rmit-blue bg-opacity-10 text-rmit-blue"
              activeClassName = "bg-opacity-20 border-opacity-0">
              {item.title}
            </NavLink>
          );
        })}

        <div className="flex flex-auto border-b-2 border-rmit-red">
        </div>
        
      </div>
    </div>
  );
};

export default NavTab;
