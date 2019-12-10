import React from "react";
// import { View, Text } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";

import Home from "../Home";
import AboutUs from "../About";
// import ContactUs from "../ContactUS";
import SideMenu from "../navigation/SideMenu";
import LogOut from "../LogOut";

const DrawerNavigator = createDrawerNavigator(
  {
    // Main: App,
    Home: Home,
    // ContactUs: ContactUs,
    AboutUs: AboutUs,
    LogOut: LogOut
  },
  {
    contentComponent: SideMenu,

    drawerPosition: "right",
    drawerBackgroundColor: "white",
    drawerType: "front"
  }
);

export default DrawerNavigator;
