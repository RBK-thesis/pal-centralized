import React from "react";
import { AsyncStorage } from "react-native";
import EditProfile from "./component/general/EditProfil";
import Imguploader from "./component/general/UploadPhoto";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      loggedOut: true
    };
    this.isSignedIn = this.isSignedIn.bind(this);
  }
  isSignedIn(user = 0) {
    this.setState({
      signedIn: !this.state.signedIn,
      UserID: user
    });
    this.props.navigation.setParams({ userid: this.state.UserID });
    console.log(this.state.UserID);
  }
  isLoggedOut() {
    this.setState({
      isLoggedOut: true
    });
  }
  componentDidMount() {
    var that = this;

    AsyncStorage.getItem("acsessToken").then(val => {
      if (val) {
        that.setState({
          signedIn: true,
          accessToken: val
        });
      } else {
        that.setState({
          signedIn: false
        });
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        {/* {this.state.signedIn ? (
          <AppNavigator
            screenProps={{ userId: this.state.UserID }}
          ></AppNavigator>
        ) : (
          <LogIn signIn={this.isSignedIn.bind(this)}></LogIn>
        )} */}
        {/* <EditProfile /> */}
        <Imguploader />
      </React.Fragment>
    );
  }
}
