import "./tailwind.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./views/Landing";
import LoginView from "./views/LoginView";
import PersonalInfoView from "./views/PersonalInfoView";
import InstructionView from "./views/InstructionView";
import QuestionView from "./views/QuestionView";

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={LoginView} />
          <Route path="/personal" component={PersonalInfoView} />
          <Route path="/instruction" component={InstructionView} />
          <Route path="/question" component={QuestionView} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </React.Fragment>
);
export default App;
