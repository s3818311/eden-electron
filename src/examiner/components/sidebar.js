import React, { useState } from "react";	
import {AiFillCaretRight, AiFillCaretLeft, AiOutlineDashboard, AiOutlineTable, AiFillBook} from "react-icons/ai";
import {NavLink} from "react-router-dom";

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
      path: "/exam", 
      icon: <AiOutlineTable size={isOpen ? 25 : 30} className="transition-all"/>
    },
    {
      title: "Student Manager", 
      path: "/student",
      icon: <AiFillBook size={isOpen ? 25 : 30} className="transition-all"/>
    }
  ];

  return (
    <>
      <div className={`flex flex-col h-screen bg-rmit-blue transition-all ${isOpen ? "w-3/12" : "w-16"}`}>
        {NavItems.map( (item, index) => {
          // Mapping each item in nav item to li
          return (
            <div key={index} className = 'font-serif text-lg text-white pl-4 pt-2 pb-2 hover:bg-nav-hover'> 

				<NavLink exact to={item.path} className ="flex flex-col flex-row" activeClassName="text-red-500 bg-nav-hover" >
					<div className='inline-block pt-1'>
						{item.icon} 
					</div>
					<div className= {isOpen ? "inline-block pl-2" : "hidden"}>
						{item.title}
					</div>
				</NavLink>   

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
