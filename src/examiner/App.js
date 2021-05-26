import React from "react";
import "tailwindcss/tailwind.css";
import Sidebar from "./components/sidebar";
import ClassManager from "./pages/ClassManager";
import Dashboard from "./pages/Dashboard";
import ExamManager from "./pages/ExamManager";
import WaitingScreen from "./pages/WaitingScreen";
import StudentManager from "./pages/StudentManager";

import RedirectPage from "./pages/RedirectPage";

// import { NavItems } from "./NavItems";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Class from "./pages/Class";
// import { NavItems } from "./NavItems";
// import Exam from "./pages/Exam";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" render={() => (
            <>
              <RedirectPage />
            </>
          )}
          />

          <Route
            exact
            path="/dashboard"
            render={() => (
              <>
                <Sidebar />
                <Dashboard />
              </>
            )}
          />
            
          

          <Route
            path="/class/:id/:tab(exam|students|result|questions)"
            render={({ match }) => (
              <>
                <Sidebar />
                <Class tabName={match.params.tab} classId={match.params.id} />
              </>
            )}
          />

          <Route
            exact
            path="/class"
            render={() => (
              <>
                <Sidebar />
                <ClassManager />
              </>
            )}
          />

          <Route
            exact
            path="/exam"
            render={() => (
              <>
                <Sidebar />
                <ExamManager />
              </>
            )}
          />

          {/* <Route exact path="/exam/:exam" render={({ match }) => (
            <>
              <Sidebar />
              <Exam examName={match.params.exam} />
            </>)}
          /> */}

          <Route exact path="/test" render={() => <WaitingScreen />} />

          <Route
            exact
            path="/students"
            render={() => (
              <>
                <Sidebar />
                <StudentManager />
              </>
            )}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
