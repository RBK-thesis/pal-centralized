import PropTypes from "prop-types";
import React, { Component } from "react";
import { Avatar, Card, Button } from "react-native-elements";
import { NavigationActions } from "react-navigation";
import axios from "axios";
import { ScrollView, Text, View, StyleSheet } from "react-native";
// const db = require("../../DataBase/db");

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  componentDidMount() {
    var that = this;
    axios
      .get("http://127.0.0.1:3004/user/?id=1")
      .then(function(response) {
        console.log(response.data.user[0]);
        that.setState({
          user: response.data.user[0]
        });
        console.log(that.state.user);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.state.user);
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
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
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
          <Button
            title="Home"
            type="clear"
            onPress={this.navigateToScreen("ContactUs")}
          >
            Home
          </Button>

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
            onPress={this.navigateToScreen("Home")}
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
