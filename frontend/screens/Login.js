import React , {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from 'axios';


import RoundButton from "../component/RoundButton";

const Login = (props) => {
  const [num , setNum] = useState('');

  const numHandler = (enteredNum) => {
    setNum(enteredNum.toString());
    // console.log(num);
  }
  const numSubmitHandler = (navigation) => {
   //some function to pass the state
  //  const numData = num;
  //  axios.post(" ", numData).then((data) => {
  //    setNum(' ');
  //  }).catch(err => {
  //    console.log(err);
  //  })

    navigation.replace("Otp");
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
        <Text>Phone Number</Text>
        <TextInput
          dataDetectorTypes="phoneNumber"
          keyboardType="number-pad"
          style={{ borderColor: "gray", borderWidth: 1, height: 40 }}
          onChangeText={numHandler}
          name = {num}
          value = {num}
          maxLength={10}
        />
        <RoundButton
          text={"Send OTP"}
          handler={() => {
            numSubmitHandler(props.navigation);
          }}
        ></RoundButton>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    // flexDirection:"row"
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
