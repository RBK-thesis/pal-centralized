import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from "react-native";
import Constants from "expo-constants";
import Header from "./navigation/Header";

import InfoBlock from "./general/infoBlock";

export default class About extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("otherParam", "About Us")
    };
  };
  render() {
    const { navigation } = this.props;

    return (
      <React.Fragment>
        <Header />
        <InfoBlock />
        <View style={styles.container}>
          <Text style={styles.paragraph}>About As</Text>
          <Text style={styles.container}>
            {" "}
            we Are A trainee in ARB Orgnization whow aimes to create a web sit
            that gathers information about jobs ,scholarships , training in
            Palestine and out side of Palestine for our just especially for our
            youth.{" "}
          </Text>
          {/* <Text>{JSON.stringify(navigation.getParam("itemId", "NO-ID"))}</Text>

        <Text>
          {JSON.stringify(navigation.getParam("otherParam", "deualt value"))}
        </Text> */}
          <Button
            title="Change Tilte "
            onPress={() => {
              this.props.navigation.setParams({ otherParam: "Updated" });
            }}
          />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
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
