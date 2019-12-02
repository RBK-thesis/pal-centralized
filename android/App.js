import React from "react";
import { View, Text, Button, Image, TouchableHighlight } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// import AppContainer from "./component/createAppContainer";
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
