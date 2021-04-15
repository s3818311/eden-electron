import React from "react";
import "tailwindcss/tailwind.css";
import Sidebar from "./components/sidebar";
import Exam from "./pages/Exam";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";



// import { NavItems } from "./NavItems";
import {BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>  
			<BrowserRouter>
				<Sidebar/>

				<Switch>
					<Route to="/">
						<Dashboard/>
					</Route>
					<Route to="/exam">
						<Exam />
					</Route>
					<Route to="/student">
						<Student />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
