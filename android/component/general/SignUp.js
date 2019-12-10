import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import axios from "axios";
import EValidator from "email-validator";
import { Text, View, StyleSheet, Button } from "react-native";
import { Card, Input, CheckBox } from "react-native-elements";
import { AsyncStorage } from "react-native";
import EditProfile from "../general/EditProfil";

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      UserName: "",
      company: false,
      validat: false,
      signedIn: false,
      Profile: false
    };
  }
  HandelSignUp(e) {
    console.log(this, this.state);
    var that = this;
    axios
      .post("http://127.0.0.1:3004/user/signUp", {
        email: that.state.email,
        passowrd: that.state.password,
        name: that.state.UserName,
        type: that.state.company
      })
      .then(async function(response) {
        // console.log(response.data, "axios");
        that.setState({
          signedIn: true
        });
        try {
          await AsyncStorage.setItem(
            "acsessToken",
            JSON.stringify(response.data.acsessToken)
          );
          await AsyncStorage.setItem(
            "user",
            JSON.stringify(response.data.user)
          );
        } catch {
          console.log("error");
        }
        // console.log(response.data.user, "iam user");
        that.setState({ Profile: true });
      })
      .catch(function(error) {
        console.log(error, "axios");
      });
  }
  PasswordChang(e) {
    this.setState({ password: e });
    console.log(this.state.password);
  }

  HandelEmailChang(e) {
    if (!EValidator.validate(e)) {
      this.setState({ validat: false });
    } else {
      this.setState({
        validat: true,
        email: e
      });
    }
  }
  HandelUserNme(e) {
    this.setState({ UserName: e });
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.Profile ? (
          <Card containerStyle={styles.container} title="LogIn Page">
            <Input
              onChangeText={this.HandelUserNme.bind(this)}
              numberOfLines={1}
              placeholder="User Name ..."
              leftIcon={<Icon name="user" size={24} color="#cf3c1f" />}
            />

            <Input
              onChangeText={this.HandelEmailChang.bind(this)}
              placeholder="  Email..."
              leftIcon={<Icon name="user" size={24} color="#cf3c1f" />}
            />
            <Text nativeID="VT"></Text>
            <Input
              onChangeText={this.PasswordChang.bind(this)}
              secureTextEntry
              numberOfLines={1}
              placeholder="Password ..."
              leftIcon={<Icon name="lock" size={24} color="#cf3c1f" />}
            />
            <CheckBox
              title="Is a Company"
              checked={this.state.company}
              onPress={() => this.setState({ company: !this.state.company })}
            />
            <Button
              title="Next"
              type="outline"
              onPress={this.HandelSignUp.bind(this)}
            />
          </Card>
        ) : (
          <EditProfile user={{}} />
        )}
      </React.Fragment>
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
