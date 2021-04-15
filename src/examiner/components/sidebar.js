import React, { useState } from "react";	
import {AiFillCaretRight, AiFillCaretLeft, AiOutlineDashboard, AiOutlineTable, AiFillBook} from "react-icons/ai";


const Sidebar = () => {
  // use state 
  const [isOpen, toggleSideBar] = useState(true);
  const showSideBar = () => toggleSideBar(!isOpen);
  const renderBtn = () => isOpen ? <AiFillCaretLeft size={25}/> : <AiFillCaretRight size={25}/>;
  
  //list of pages
  const NavItems = [
    {
      title: "Dashboard",
      path: "/", 
      icon: <AiOutlineDashboard size={isOpen ? 25 : 30} className="transition-all"/>
    }, 
    {
      title: "Exam Manager", 
      path: "/", 
      icon: <AiOutlineTable size={isOpen ? 25 : 30} className="transition-all"/>
    },
    {
      title: "Student Manager", 
      path: "/",
      icon: <AiFillBook size={isOpen ? 25 : 30} className="transition-all"/>
    }
  ];

  return (
    <>
      <div className={`flex flex-col h-screen bg-rmit-blue transition-all ${isOpen ? "w-3/12" : "w-16"}`}>
        {NavItems.map( (item, index) => {
          // Mapping each item in nav item to li
          return (
            <div key={index} className="flex flex-row items-center p-4 text-xl text-white gap-x-5 hover:bg-nav-hover"> 
              <div className="inline-block">
                {item.icon} 
              </div>
              <div className={isOpen ? "inline-block" : "hidden"}>
                {item.title}
              </div>
            </div>
          );
        })}

        <div className="w-full h-10 mt-auto cursor-pointer hover:bg-nav-hover" onClick={showSideBar}>
          <div className="flex items-center justify-center h-full text-white">
            {renderBtn()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
