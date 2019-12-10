import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from "react-native";
import { AsyncStorage } from "react-native";
import { Card, Input } from "react-native-elements";
// import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
// import Constants from "expo-constants";
// import * as Permissions from "expo-permissions";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.getData();
    // this.getPermissionAsync();
    console.log("hi");
  }

  // getPermissionAsync = async () => {
  //   if (Constants.platform.ios) {
  //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //     if (status !== "granted") {
  //       alert("Sorry, we need camera roll permissions to make this work!");
  //     }
  //   }
  // };
  // _pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     this.setState({ image: result.uri });
  //   }
  // };

  HandleSkip() {}
  HandleSubmit() {}
  async getData() {
    try {
      var that = this;
      await AsyncStorage.getItem("user").then(user => {
        that.setState({ user: JSON.parse(user) });
      });
    } catch {
      console.log("error");
    }
  }
  render() {
    return (
      <View>
        {/* <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button
            title="Pick an image from camera roll"
            onPress={this._pickImage}
          />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View> */}

        <Card containerStyle={styles.container} title="LogIn Page">
          <Input
            nativeID={"description"}
            numberOfLines={1}
            placeholder="description."
            leftIcon={<Icon name="user" size={24} color="#cf3c1f" />}
          />

          <Input
            placeholder="  Email..."
            leftIcon={<Icon name="user" size={24} color="#cf3c1f" />}
          />
          <Text nativeID="VT"></Text>
          <Input
            secureTextEntry
            numberOfLines={1}
            placeholder="Password ..."
            leftIcon={<Icon name="lock" size={24} color="#cf3c1f" />}
          />
          <View>
            <Button
              title="Skip"
              type="outline"
              onPress={this.HandleSkip.bind(this)}
            />
            <Button
              title="Sumbit"
              type="outline"
              onPress={this.HandleSubmit.bind(this)}
            />
          </View>
        </Card>
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
