import * as React from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight
} from "react-native";
import { Avatar, Card } from "react-native-elements";
export default class InfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title,
      deadLine: this.props.post.deadLine,
      id: this.props.post.id,
      logo: this.props.post.logo,
      description: this.props.post.description,
      major: this.props.post.major,
      type: this.props.post.type
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{this.state.title}</Text>
        <Text style={styles.paragraph}>{this.state.deadLine}</Text>
        <Text style={styles.paragraph}>{this.state.description}</Text>
        {/* <Avatar
          size={70}
          rounded
          source={{
            uri:
              this.state.post.logo ||
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
          }}
        ></Avatar> */}
      </View>
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
