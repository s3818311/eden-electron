import React from "react";
import "tailwindcss/tailwind.css";
import Sidebar from "./components/sidebar";
import Exam from "./pages/Exam";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import WaitingScreen from "./pages/WatingScreen";


// import { NavItems } from "./NavItems";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Class from "./pages/Class";

function App() {

  return (
    <>
      <BrowserRouter>

        <Switch>
          <Route exact path="/dashboard" render={() => (
            <>
              <Sidebar />
              <Dashboard />
            </>)} />

          <Route path="/exam/:class/:tab(list|participant|result)" render={({match}) => (
            <>
              <Sidebar />
              <Class tabName={match.params.tab} className={match.params.class} />
            </>
          )} />

          <Route exact path="/exam" render={() => (
            <>
              <Sidebar />
              <Exam />
            </>
          )} />

          <Route exact path="/student" render={() => (
            <>
              <Sidebar />
              <Student />
            </>)} />

          <Route exact path="/test" render={() => <WaitingScreen />} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
