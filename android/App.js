import React from "react";
import LogIn from "./component/general/LogIn";
// import Footer from "./component/general/footer";
import AppNavigator from "./component/navigation/AppNavigator";
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LogIn></LogIn>
        {/* <AppNavigator></AppNavigator> */}
      </React.Fragment>
    );
  }
}
