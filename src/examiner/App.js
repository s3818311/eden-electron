import React from "react";
import "tailwindcss/tailwind.css";
import Sidebar from "./components/sidebar";
import Exam from "./pages/Exam";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";

// import { NavItems } from "./NavItems";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import ExamFolder from "./pages/ExamFolder";

function App() {
  return (
    <>  
      <BrowserRouter>
        <Sidebar/>

        <Switch>
          <Route exact path="/" component="Dashboard">
            <Dashboard/>
          </Route>
          <Route exact path="/exam" component="Exam">
            <Exam />
          </Route>
          <Route exact path="/student" component="Student">
            <Student />
          </Route>
          <Route path="/exam/folder" component="ExamFolder">
            <ExamFolder/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
