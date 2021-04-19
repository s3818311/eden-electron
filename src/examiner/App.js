import React from "react";
import "tailwindcss/tailwind.css";
import Sidebar from "./components/sidebar";
import Exam from "./pages/Exam";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";

// import { NavItems } from "./NavItems";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Class from "./pages/Class";

function App() {

  return (
    <>
      <BrowserRouter>
        <Sidebar/>

        <Switch>
          <Route exact path="/dashboard" component="Dashboard">
            <Dashboard/>
          </Route>
          <Route path="/exam/class/:tab(list|participant|result)" render={({match})=> <Class tabName = {match.params.tab} />}>
          </Route>
          <Route exact path="/exam" component="Exam">
            <Exam />
          </Route>
          <Route exact path="/student" component="Student">
            <Student />
          </Route>
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
