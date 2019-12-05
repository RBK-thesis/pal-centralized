import PropTypes from "prop-types";
import React, { Component } from "react";
import { Avatar, Card, Button } from "react-native-elements";
import { NavigationActions } from "react-navigation";
import { ScrollView, Text, View, StyleSheet } from "react-native";

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

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
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
              }}
              showEditButton
            />
            <Text onPress={this.navigateToScreen("Page1")}>
              MOHAMMAD KAMAISA
            </Text>
          </View>
        </Card>

        <View style={styles.container}>
          <Button
            title="Home"
            type="clear"
            onPress={this.navigateToScreen("../AboutUs")}
          >
            Home
          </Button>

          <Button
            title="AboutUs"
            type="solid"
            onPress={this.navigateToScreen("../AboutUs")}
          ></Button>

          <Button
            title="Profile"
            type="clear"
            onPress={this.navigateToScreen("../AboutUs")}
          ></Button>

          <Button
            title="Logout"
            type="solid"
            onPress={this.navigateToScreen("../Home")}
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
