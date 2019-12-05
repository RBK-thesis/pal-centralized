import * as React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

// or any pure javascript modules available in npm
// import { Card } from "react-native-paper";
// import "react-native-gesture-handler";

export default class NavPar extends React.Component {
  render() {
    let data = [
      {
        value: "Banana"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      }
    ];
    //   <Dropdown label="Favorite Fruit" data={data} />;
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableHighlight onPress={() => navigation.navigate("AboutUs")}>
          <Image
            source={{
              uri:
                "https://freepngimg.com/thumb/home/12-2-home-download-png.png"
            }}
            style={{ width: 30, height: 30 }}
          />
        </TouchableHighlight>
        <Text>{"AM INSIDE THE NAVpAR"}</Text>
      </View>
    );
  }
}
