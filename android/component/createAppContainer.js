import React from "react";
import { View, Text, Button, Image, TouchableHighlight } from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { Ionicons } from "react-native-vector-icons";

import ContactUs from "./ContactUs";
import AboutUs from "./About";
import Home from "./Home";
import NavPar from "./NavPar";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    ContactUs: ContactUs,
    AboutUs: AboutUs
  },

  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTitle: () => <NavPar />,
      headerRight: () => (
        <Image
          style={{ flex: 1, flexDirection: "row" }}
          source={{
            uri:
              "https://badoystudio.com/wp-content/uploads/2018/05/usericon.png"
          }}
          style={{ width: 30, height: 30 }}
        />
      ),
      headerStyle: {
        backgroundColor: "#2c87d1"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
