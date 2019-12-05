import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from "react-native";
import Constants from "expo-constants";
import Header from "./navigation/Header";
// You can import from local files

// or any pure javascript modules available in npm
// import { Card } from "react-native-paper";
// import "react-native-gesture-handler";

export default class Contact extends React.Component {
  static navigationOptions = {
    title: "Contact Us"
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <Text style={styles.paragraph}>Contat us</Text>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
