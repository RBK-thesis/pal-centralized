import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import axios from "axios";
import EValidator from "email-validator";
import $ from "jquery";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableHighlight
} from "react-native";
import { SocialIcon, Card, Input } from "react-native-elements";

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validat: true
    };
    // HandelLoginByEmail = this.HandelLoginByEmail.bind(this);
  }
  HandelLoginByEmail(e) {
    // console.log("username", this.state.username, "password"),
    this.state.password;
    if (this.state.validat) {
      var that = this;
      axios
        .post("http://127.0.0.1:3004/user/signIn", {
          email: this.state.email,
          passowrd: this.state.password
        })
        .then(function(response) {
          console.log(response.data, "axios");
        })
        .catch(function(error) {
          console.log(error, "axios");
        });
    }
  }
  PasswordChang(e) {
    this.setState({ password: e });
    console.log(this.state.password);
  }

  HandelEmailChang(e) {
    if (!EValidator.validate(e)) {
      // $("#TV").text = "this is not a Valied Email";
      this.setState({ validat: false });
    } else {
      this.setState({ validat: true });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.container} title="LogIn Page">
          <Input
            onChangeText={this.HandelEmailChang.bind(this)}
            placeholder="  Insert Your Email..."
            leftIcon={<Icon name="user" size={24} color="#cf3c1f" />}
          />
          <Text nativeID="VT"></Text>
          <Input
            onChangeText={this.PasswordChang.bind(this)}
            secureTextEntry
            numberOfLines={1}
            placeholder="  Insert Your Password ..."
            leftIcon={<Icon name="lock" size={24} color="#cf3c1f" />}
          />

          <Button
            title="Login"
            type="outline"
            onPress={this.HandelLoginByEmail.bind(this)}
          />
        </Card>
        <Text style={styles.paragraph}> OR</Text>
        <SocialIcon
          style={styles.cardCnt}
          title="Sign In With google"
          button
          type="google"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardCnt: {
    borderWidth: 0, // Remove Border
    shadowColor: "rgba(0,0,0, 0.0)", // Remove Shadow IOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    backgroundColor: "#2d7feb",

    elevation: 0 // This is for Android
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#ffffff",
    padding: 8,
    shadowColor: "rgba(0,0,0, 0.0)", // Remove Shadow IOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d7feb",
    textAlign: "center"
  }
});
