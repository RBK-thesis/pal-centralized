import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUpGeneral from "./components/general/Sign-up-general";
import SignUpCompany from "./components/company/Sign-up-company";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h2>
          <Link to="/signup">Main Sign up</Link>
        </h2>

        <Switch>
          <Route path="/signup" exact component={SignUpGeneral} />
          <Route path="/signupcompany" component={SignUpCompany} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
