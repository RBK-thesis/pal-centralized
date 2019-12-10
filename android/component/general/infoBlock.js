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

import Header from "../navigation/Header";
import InfoCard from "./infoCard";

export default class infoBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    var that = this;
    axios
      .get("http://127.0.0.1:3004/articles")
      .then(function(response) {
        console.log(response.data, "axios");
        that.setState({ posts: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    // console.log(this.state.user);
  }
  render() {
    console.log(this.state.posts);
    var items = this.state.posts.map((item, i) => {
      return <InfoCard key={i} post={item}></InfoCard>;
    });
    return <View>{items}</View>;
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
