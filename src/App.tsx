import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import {
  PrivateRouteLogin,
  PrivateRouteHeader
} from "./components/helper/Private-route-login.js";

import SignUpGeneral from "./components/general/Sign-up-general";
import SignUpCompany from "./components/company/Sign-up-company";
import SignUpUser from "./components/user/Sign-up-user";
import Login from "./components/general/Login";
import MainPageHeader from "./components/general/Home-page-header";
import MainPageFooter from "./components/general/Home-page-footer";
import MainPagePosts from "./components/general/Home-page-posts";
import Search from "./components/general/Search";
import UserPageHeader from "./components/user/User-page-header";
import SearchResult from "./components/general/Seacrh-result";

import UserPagePosts from "./components/user/User-page-posts";
import CompanyPageHeader from "./components/company/Company-page-header";
import AboutUs from "./components/general/AboutUs-page";
import ContactUs from "./components/general/ContactUs-page";
import CompanyHomePage from "./components/company/Company-home-page";
import CompanyNewPost from "./components/company/company-new-post";
import UserProfile from "./components/user/UserProfile-page";
import CompanyProfile from "./components/company/CompanyProfile-page";

// import { logout } from "./actions/index";
// import { signup } from "./actions/index";

const App: React.FC = () => {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));

  // let userType = localStorage.getItem("userType");
  // check if there is a user logged or not
  useEffect(() => {
    setIsLogged(localStorage.getItem("token"));
  }, []);

  if (isLogged)
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <UserPageHeader />
              <Search />
              <UserPagePosts />
            </Route>
            <Route path="/company" exact>
              <CompanyPageHeader />
              <CompanyHomePage />
            </Route>
            <Route path="/searchresult">
              <UserPageHeader />
              <Search />
              <SearchResult />
            </Route>
            <Route path="/signup" exact component={SignUpGeneral} />
            <Route path="/signupcompany" component={SignUpCompany} />
            <Route path="/signupuser" component={SignUpUser} />{" "}
            <Route path="/login" component={Login} />
            <Route path="/addpost" component={CompanyNewPost} />
            <Route path="/aboutus" exact>
              <UserPageHeader />
              <AboutUs />
            </Route>
            {/* --------------------------------- User Routes ---------------------------------- */}
            <Route path="/useraccount" exact>
              <UserPageHeader />
              <UserProfile />
            </Route>
            <Route path="/edituseraccount" exact>
              <UserPageHeader />
              <h1 style={{ margin: "5em auto", width: "75%" }}>
                User Edit Page
              </h1>
            </Route>
            <Route path="/contactus" exact>
              <UserPageHeader />
              <ContactUs />
            </Route>
            <Route path="/aboutuscompany" exact>
              <CompanyPageHeader />
              <AboutUs />
              {/* --------------------------------- Company Routes ---------------------------------- */}
            </Route>
            <Route path="/contactuscompany" exact>
              <CompanyPageHeader />
              <ContactUs />
            </Route>
            <Route path="/newpost" exact>
              <CompanyPageHeader />
              <CompanyNewPost />
            </Route>
            <Route path="/companyaccount" exact>
              <CompanyPageHeader />
              <CompanyProfile />
            </Route>
            <Route path="/companyarchive" exact>
              <CompanyPageHeader />
            </Route>
            <Route path="/companyeditaccount" exact>
              <CompanyPageHeader />
              <h1 style={{ margin: "8rem auto", width: "75%" }}>
                Edit Company Profile Page
              </h1>
            </Route>
          </Switch>

          <MainPageFooter />
        </div>
      </Router>
    );
  else
    return (
      <Router>
        <div className="App">
          <MainPageHeader />
          <Switch>
            <Route path="/" exact>
              <Search />
              <MainPagePosts />
            </Route>
            <Route path="/searchresult">
              <Search />
              <SearchResult />
            </Route>
            <Route path="/signup" exact component={SignUpGeneral} />
            <Route path="/signupcompany" component={SignUpCompany} />
            <Route path="/signupuser" component={SignUpUser} />{" "}
            <Route path="/login" component={Login} />
            <Route path="/aboutus" exact>
              <MainPageHeader />
              <AboutUs />
            </Route>
            <Route path="/contactus" exact>
              <MainPageHeader />
              <ContactUs />
            </Route>
          </Switch>
          <MainPageFooter />
        </div>
      </Router>
    );
};

export default App;
