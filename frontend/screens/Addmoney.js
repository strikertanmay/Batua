import React , {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import axios from 'axios';

import RoundButton from "../component/RoundButton";

const [money, setMoney] = useState('');

const numInputHandler = (enteredData) => {
    setMoney(enteredData);
}

const getStartedHandler = (navigation) => {
    // const moneyData = money;
    // axios.post(" ", moneyData).then((data) => {
    //     setMoney(' ');
    // }).catch(err => {
    //     console.log(err);
    // })
  navigation.navigate('Login');
};

const Addmoney = props => {

  const numInputHandler = navigation => {};

  return (
    <View style={styles.Container}>


      <View>
        <Image
          source={require("../assets/add_money.png")}
          style={styles.background_image}
        />
      </View>

      <Text style={{ marginTop: 50, fontSize: 18 }}>Enter Amount</Text>
        <TextInput
          dataDetectorTypes="phoneNumber"
          keyboardType="number-pad"
          style={{ borderColor: "gray", borderWidth: 1, height: 40, width: 200, marginTop: 10 }}
          onChangeText={numInputHandler}
          value = {money}
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
    width: 170,
    height: 120,
    resizeMode: "stretch"
  },
  get_started: {
    marginTop: 30
  }
});
