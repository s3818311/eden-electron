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
          <Route exact path="/dashboard" render={() => <Dashboard />} />

          <Route path="/exam/:class/:tab(list|participant|result)" render={({match}) => <Class tabName={match.params.tab} className={match.params.class} />} />

          <Route exact path="/exam" render={() => <Exam />} />

          <Route exact path="/student" render={() => <Student />} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
