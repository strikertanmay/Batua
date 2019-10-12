import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";

import RoundButton from "../component/RoundButton";

const getStartedHandler = (navigation) => {
  navigation.navigate('Login');
};

const Welcome = props => {
  return (
    <View style={styles.Container}>
      <View>
        <Image
          source={require("../assets/welcome.png")}
          style={styles.background_image}
        />
      </View>
      <RoundButton
        text={"Get Started"}
        handler={() => {getStartedHandler(props.navigation)}}
      ></RoundButton>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  background_image: {
    width: 80,
    height: 120,
    resizeMode: "stretch"
  },
  get_started: {
    marginTop: 30
  }
});
