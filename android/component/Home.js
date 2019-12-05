import * as React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Constants from "expo-constants";

import Header from "./navigation/Header";
import InfoBlock from "./general/infoBlock";
export default class Home extends React.Component {
  // static navigationOptions = {
  //   headerTitle: () => {
  //     return (
  //       <TouchableHighlight
  //         onPress={() => this.props.navigation.navigate("AboutUs")}
  //       >
  //         <Image
  //           source={{
  //             uri: "http://simpleicon.com/wp-content/uploads/cute.png"
  //           }}
  //           style={{ width: 30, height: 30 }}
  //         />
  //       </TouchableHighlight>
  //     );
  //   },
  //   headerRight: () => <Button onPress={() => {}} title="SignIn" />
  // };
  render() {
    return (
      <React.Fragment>
        <Header />
        <InfoBlock />
        <InfoBlock />
        <InfoBlock />
        <InfoBlock />
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
