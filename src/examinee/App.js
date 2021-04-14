import "./tailwind.css";
import React from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import PersonalInfoView from "./views/PersonalInfoView";



const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/login" component={LoginView}/>
          <Route path="/personal" component={PersonalInfoView} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </React.Fragment>
);
export default App;
