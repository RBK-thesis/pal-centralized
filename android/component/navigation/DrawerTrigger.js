import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// withNavigation allows components to dispatch navigation actions
import { withNavigation } from "react-navigation";
import { Avatar } from "react-native-elements";

// DrawerActions is a specific type of navigation dispatcher
import { DrawerActions } from "react-navigation-drawer";

class DrawerTrigger extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer());
        }}
      >
        <Avatar
          size={30}
          source={{
            uri:
              "https://icon-library.net/images/icon-menu-png/icon-menu-png-15.jpg"
          }}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 27.5,
    borderRadius: 30,
    width: 60,
    height: 60
  }
});

export default withNavigation(DrawerTrigger);
