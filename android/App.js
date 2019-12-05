import React from "react";

// import Footer from "./component/general/footer";
import AppNavigator from "./component/navigation/AppNavigator";
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppNavigator />
      </React.Fragment>
    );
  }
}
