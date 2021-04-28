import React from "react";
import "tailwindcss/tailwind.css";
import Sidebar from "./components/sidebar";
import ClassManager from "./pages/ClassManager";
import Dashboard from "./pages/Dashboard";
import ExamManager from "./pages/ExamManager";
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

          <Route path="/class/:class/:tab(start|participant|result)" render={({match}) => (
            <>
              <Sidebar />
              <Class tabName={match.params.tab} className={match.params.class} />
            </>
          )} />

          <Route exact path="/class" render={() => (
            <>
              <Sidebar />
              <ClassManager />
            </>
          )} />

          <Route exact path="/exam" render={() => (
            <>
              <Sidebar />
              <ExamManager />
            </>)} />

          <Route exact path="/test" render={() => <WaitingScreen />} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
