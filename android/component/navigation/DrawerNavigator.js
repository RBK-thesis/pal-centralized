import React from "react";
// import { View, Text } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";

import Home from "../Home";
import AboutUs from "../About";
import ContactUs from "../ContactUS";
import SideMenu from "../navigation/SideMenu";
import LogIn from "../general/LogIn";

const DrawerNavigator = createDrawerNavigator(
  {
    // Main: Main,
    Home: Home,
    ContactUs: ContactUs,
    AboutUs: AboutUs
  },
  {
    contentComponent: SideMenu,

    drawerPosition: "right",
    drawerBackgroundColor: "white",
    drawerType: "front"
  }
);

export default DrawerNavigator;
