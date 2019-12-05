import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CompanyProfile from "./components/companyProfile/companyProfile";
import UserProfile from "./components/UserProfile/userProfile";
import EditCompany from "./components/editCompany/editCompany";
import EditUser from "./components/editUser/editUser";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/userProfile" exact component={UserProfile} />
          <Route path="/companyProfile" component={CompanyProfile} />
          <Route path="/userEdit" component={EditUser} />
          <Route path="/companyEdit" component={EditCompany} />
        </Switch>
      </div>
    </Router>
=======
import "semantic-ui-css/semantic.min.css";
import SignUp from "./components/general/Sign-up";

const App: React.FC = () => {
  return (
    <div className="App">
      <SignUp />
    </div>
>>>>>>> ce1603668a95d63214c4ced5c5a6ab5fd8036dda
  );
};

export default App;
