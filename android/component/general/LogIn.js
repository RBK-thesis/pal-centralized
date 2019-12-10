import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import axios from "axios";
import EValidator from "email-validator";
import $ from "jquery";
import { Text, View, StyleSheet, Button } from "react-native";
import { SocialIcon, Card, Input } from "react-native-elements";
import { AsyncStorage } from "react-native";
import SignUp from "../general/SignUp";

export default class LogIn extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  constructor(props) {
    super(props);
    this.state = {
      goToSigUp: false,
      email: "",
      password: "",
      validat: false,
      signedIn: false,
      accessToken: "",
      company: false,
      continue: false
    };
  }

  componentDidMount() {
    this.props.nav;
    // try {
    //   var token = await AsyncStorage.getItem("acsessToken");
    //   if (token !== null) {
    //     console.log("hi")
    //   }
    // }catch{
    // }
  }
  doSignIn(userid) {
    this.props.signIn(userid);
  }
  HandelLoginByEmail(e) {
    this.state.password;
    if (this.state.validat) {
      var that = this;
      axios
        .post("http://127.0.0.1:3004/user/signIn", {
          email: this.state.email,
          passowrd: this.state.password
        })
        .then(async function(response) {
          console.log(response.data, "axios");
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
          console.log(response.data.user, "iam user");
          that.doSignIn(response.data.user["id"]);
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
      this.setState({ validat: false });
    } else {
      this.setState({
        validat: true,
        email: e
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {!this.state.goToSigUp ? (
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
              <Text style={styles.paragraph}> OR</Text>
              <SocialIcon
                style={styles.cardCnt}
                title="Sign In With google"
                button
                type="google"
              />
              <Button
                title={"Or sign Up"}
                onPress={() => this.setState({ goToSigUp: true })}
              ></Button>
            </Card>
          </View>
        ) : (
          <View>
            <SignUp />
          </View>
        )}
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
