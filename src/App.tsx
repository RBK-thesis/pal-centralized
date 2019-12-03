import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUpGeneral from "./components/general/Sign-up-general";
import SignUpCompany from "./components/company/Sign-up-company";
import SignUpUser from "./components/user/Sign-up-user";
import Login from "./components/general/Login";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h2 style={{ marginTop: "2rem" }}>
          <Link to="/signup">Main Sign up</Link>
        </h2>

        <h2 style={{ marginTop: "2rem" }}>
          <Link to="/login">Login</Link>
        </h2>

        <Switch>
          <Route path="/signup" exact component={SignUpGeneral} />
          <Route path="/signupcompany" component={SignUpCompany} />
          <Route path="/signupuser" component={SignUpUser} />{" "}
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
