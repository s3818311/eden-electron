import {AiFillCaretRight, AiFillCaretLeft, AiOutlineDashboard, AiOutlineTable, AiFillBook} from "react-icons/ai";


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

	const [sidebar, toggleSideBar] = useState(true);
	const showSideBar = () => toggleSideBar(!sidebar);
