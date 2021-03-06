import React , {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import RoundButton from "../component/RoundButton";

const Otp = props => {
  const [otp , setOtp] = useState('');
  
  const otpInputHandler = (enteredNum) => {
    setOtp(enteredNum.toString());
    // console.log(num);
  }

  const submitHandler = navigation => {
    if(otp === '1234'){
      navigation.replace("Register");
    }
    else{
      alert('Sorry ! Please try Again');
    }
    
  };

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
        <Text>Enter OTP</Text>
        <TextInput
          dataDetectorTypes="phoneNumber"
          keyboardType="number-pad"
          style={{ borderColor: "gray", borderWidth: 1, height: 40 }}
          onChangeText={otpInputHandler}
          value = {otp}
          maxLength={4}
        />

        <RoundButton
          text={"Verify OTP"}
          handler={() => {
            submitHandler(props.navigation);
          }}
        ></RoundButton>
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
