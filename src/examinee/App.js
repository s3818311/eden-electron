import "./tailwind.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import PersonalInfoView from "./views/PersonalInfoView";
import QuestionView from "./views/QuestionView";

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/login" component={LoginView} />
          <Route path="/personal" component={PersonalInfoView} />
          <Route path="/question" component={QuestionView} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </React.Fragment>
);
export default App;
