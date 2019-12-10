import PropTypes from "prop-types";
import React, { Component } from "react";
import { Avatar, Card, Button } from "react-native-elements";
import { NavigationActions } from "react-navigation";
import axios from "axios";
import { Text, View, StyleSheet } from "react-native";
import { AsyncStorage } from "react-native";

// const db = require("../../DataBase/db");

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.Loggingout = this.Loggingout.bind(this);
  }
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  Loggingout() {}
  async getData() {
    try {
      var that = this;
      await AsyncStorage.getItem("user").then(user => {
        that.setState({ user: JSON.parse(user) });
      });
    } catch {
      console.log("error");
    }
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.cardCnt}>
          <View Style={styles.content}>
            <Text></Text>
            <Avatar
              size={70}
              rounded
              source={{
                uri:
                  this.state.user.logo ||
                  "https://bim-and-beyond.eu/wp-content/uploads/2018/08/unknown.png"
              }}
              showEditButton
            />
            <Text onPress={this.navigateToScreen("Page1")}>
              {this.state.user.Name || "non"}
            </Text>
            <Text onPress={this.navigateToScreen("Page1")}>
              {this.state.user.email || "non"}
            </Text>
          </View>
        </Card>

        <View style={styles.container}>
          {/* <Button
            title="Home"
            type="clear"
            onPress={this.navigateToScreen("ContactUs")}
          >
            Home
          </Button> */}

          <Button
            title="AboutUs"
            type="solid"
            onPress={this.navigateToScreen("AboutUs")}
          ></Button>

          <Button
            title="Profile"
            type="clear"
            onPress={this.navigateToScreen("AboutUs")}
          ></Button>

          <Button
            title="Logout"
            type="solid"
            onPress={this.navigateToScreen("LogOut")}
          >
            Logout
          </Button>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  cardCnt: {
    borderWidth: 0, // Remove Border
    shadowColor: "rgba(0,0,0, 0.0)", // Remove Shadow IOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0 // This is for Android
  },
  container: {},
  content: {
    borderWidth: 0,
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  form: {
    width: "100%"
  },
  item: {}
});
export default SideMenu;
