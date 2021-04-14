import "./tailwind.css";
import React from "react";
import { BrowserRouter, } from "react-router-dom";
import LoginView from "./views/LoginView";


const App = () => (
	<BrowserRouter>
		<LoginView path="/login" />
	</BrowserRouter>
);
export default App;
