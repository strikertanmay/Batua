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

const Addmoney = props => {
  return (
    <View style={styles.Container}>
        <View>
            <Text>Add Money</Text>
        </View>

      <View>
        <Image
          source={require("../assets/add_money.png")}
          style={styles.background_image}
        />
      </View>

      <Text>Enter Amount</Text>
        <TextInput
          dataDetectorTypes="phoneNumber"
          keyboardType="number-pad"
          style={{ borderColor: "gray", borderWidth: 1, height: 40 }}
          onChangeText={numInputHandler}
          maxLength={8}
        />
      <View>
      </View>
      <RoundButton
        text={"Add Money"}
        handler={() => {getStartedHandler(props.navigation)}}
      ></RoundButton>
    </View>
  );
};

export default Addmoney;

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