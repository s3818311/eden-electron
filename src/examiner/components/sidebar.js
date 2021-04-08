import React, { useState } from "react";	
import {AiFillCaretRight, AiFillCaretLeft, AiOutlineDashboard, AiOutlineTable, AiFillBook} from "react-icons/ai";


const Sidebar = () => {
	// use state 
	const [sidebar, toggleSideBar] = useState(true);
	const showSideBar = () => toggleSideBar(!sidebar);

	//list of pages
	const NavItems = [
		{
			title: "Dashboard",
			path: "/", 
			icon: <AiOutlineDashboard size={ sidebar ? 22:30}/>
		}, 
		{
			title: "Exam Manager", 
			path: "/", 
			icon: <AiOutlineTable size={ sidebar ? 22:30}/>
		},
		{
			title: "Student Manager", 
			path: "/",
			icon: <AiFillBook size={ sidebar ? 22:30}/>
		}
	];

	return (
		<>
			<nav className = { sidebar ? "w-3/12 flex flex-col h-screen bg-rmit-blue" : "w-16 flex flex-col h-screen bg-rmit-blue"}>

				<ul className = ''>
					{NavItems.map( (item, index) => {
						// Mapping each item in nav item to li
						return (
                            
							<li key={index} className = 'font-serif text-lg text-white pl-4 pt-2 pb-2 hover:bg-nav-hover' > 

								<div className='inline-block pt-1'>
									{item.icon} 
								</div>
								<div className= {sidebar ? "inline-block pl-2" : "hidden"}>
									{item.title}
								</div>
                                
							</li>
                        
						);
					})}
				</ul>

				<div className='mt-auto w-full text-center'>
					<span className= {sidebar ? " hidden" : "text-lg text-white text-center"}>
						<button onClick={showSideBar}>
							<AiFillCaretRight size={20}/>
						</button>
					</span>
					<span className ={sidebar ? " text-lg text-white text-center" : "hidden"}>
						<button  onClick={showSideBar}> 
							<AiFillCaretLeft size={20}/>
						</button>
					</span>
				</div>
			</nav>
		</>
	);
};

export default Sidebar;
