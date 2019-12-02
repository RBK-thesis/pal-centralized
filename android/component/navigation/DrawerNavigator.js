import React from "react";
// import { View, Text } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";

import Home from "../Home";
import AboutUs from "../About";
import ContactUs from "../ContactUs";

const DrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
    ContactUs: ContactUs,
    AboutUs: AboutUs
  },
  {
    drawerPosition: "left",
    drawerBackgroundColor: "orange",
    drawerType: "slide"
  }
);

export default DrawerNavigator;
