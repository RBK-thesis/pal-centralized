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
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// You can import from local files

// or any pure javascript modules available in npm
// import { Card } from "react-native-paper";
// import "react-native-gesture-handler";
class Nav extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={() => alert("This is a button!")}>
        <Image
          source={{
            uri: "http://simpleicon.com/wp-content/uploads/cute.png"
          }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableHighlight>
    );
  }
}
export default class Home extends React.Component {
  static navigationOptions = {
    headerTitle: () => {
      return (
        <TouchableHighlight onPress={() => alert("This is a button!")}>
          <Image
            source={{
              uri: "http://simpleicon.com/wp-content/uploads/cute.png"
            }}
            style={{ width: 30, height: 30 }}
          />
        </TouchableHighlight>
      );
    },
    headerRight: () => (
      <Button onPress={() => alert("This is a button!")} title="Info" />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Home page</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate("AboutUs")}
        />
        <Text> {""}</Text>
        <Button
          title="Contact Us"
          onPress={() => {
            this.props.navigation.navigate("ContactUs");
          }}
        />
        <Text> {""}</Text>
        <Button
          title=" About Us"
          onPress={() => {
            this.props.navigation.push("AboutUs", {
              itemId: 86,
              otherParam: "anything you want here"
            });
          }}
        />
      </View>
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