import React from "react";
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
  );
};

export default App;
