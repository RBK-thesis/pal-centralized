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
// import Header from "./navigation/Header";
import { AsyncStorage } from "react-native";

export default class logOut extends React.Component {
  constructor(props) {
    super(props);
    AsyncStorage.removeItem("acsessToken");
    AsyncStorage.removeItem("user");
  }
  static navigationOptions = {
    title: "Log Out"
  };
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Text style={styles.paragraph}>Contat us</Text>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3232a8",
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
