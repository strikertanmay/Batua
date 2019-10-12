import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

const Otp = props => {
  const numInputHandler = () => {};
  return (
    <View
      style={{ flexDirection: "column", justifyContent: "center", flex: 1 }}
    >
      <View>
        <Image
          source={require("../assets/logo_text_black.png")}
          style={{ width: 220, height: 60 }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textCaption}>One family, One Account</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text>Phone Number</Text>
        <TextInput
          dataDetectorTypes="phoneNumber"
          keyboardType="number-pad"
          style={{ borderColor: "gray", borderWidth: 1, height: 40 }}
          onChangeText={numInputHandler}
          maxLength={4}
        />

        <TouchableOpacity>
          <Text>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    // flexDirection:"row",
    alignContent: "center"
  },
  textCaption: {
    marginTop: 15,
    fontSize: 20
  },
  inputContainer: {
    marginTop: 50
  }
});
