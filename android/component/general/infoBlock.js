import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight
} from "react-native";
import { Avatar, Card } from "react-native-elements";

import Header from "../navigation/Header";

export default class infoBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "my name is iiii",
        Discription: "this is my description part ",
        imgUrl:
          "https://1.bp.blogspot.com/-J2aei9p3rds/UvIGDQr-iJI/AAAAAAAAAnM/f30mknQqH3A/s1600/water_splash_png_by_starlaa1-d51fsnt.png"
      }
    };
  }
  render() {
    return (
      <Card title={this.state.data.name}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.container}> {this.state.data.Discription}</Text>
          <Avatar
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            }}
          />

          {/* <Header
            placement="left"
            leftComponent={{ icon: "menu", color: "#fff" }}
            centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
            rightComponent={{ icon: "home", color: "#fff" }}
          /> */}

          <Text style={styles.paragraph}></Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
