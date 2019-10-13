import React, {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import axios from 'axios';

import RoundButton from "../component/RoundButton";


const Register = props => {

  const [userData, setUserData] = useState({fnmae : ' ',  lname : ' ', age : ' ', loading : false})

  const [isFill, setisFill] = useState(false);
  const registerInputHandler = (enteredData) => {
            setUserData({fname : enteredData.fname , lname = enteredData.lname, age = enteredData.age});
            setisFill(true);
  };

  const submitHandler = navigation => {

    // const userdata =  {
    //   fname : userData.fname,
    //   lname : userData.lname,
    //   age : userData.age
    // }

    // setUserData({loading : true})
    // axios.post(" ", userdata).then(data => {
    //   setUserData({fnmae : ' ', lname : ' ', age: '' , loading:false})
    // }).catch(err => {
    //   console.log(err);
    // })

    if(isFill){
      navigation.replace("OptSelect");
    }
    else{
      alert('Please submit all the details')
    }
    
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text>First Name</Text>
        <TextInput
          style={{ borderColor: "gray", borderWidth: 1, height: 40 }}
          onChangeText={registerInputHandler}
          name = {fname}
          value = {userData.fname}
        />
        <Text>Last Name</Text>
        <TextInput
          style={{ borderColor: "gray", borderWidth: 1, height: 40 }}
          onChangeText={registerInputHandler}
          name = {lname}
          value = {userData.lname}
        />

        <Text>Age</Text>
        <TextInput
          keyboardType="number-pad"
          style={{ borderColor: "gray", borderWidth: 1, height: 40 }}
          onChangeText={registerInputHandler}
          name = {age}
          maxLength = {2}
          value = {userData.age}
        />

        <RoundButton
          text={"Submit"}
          handler={() => {
            submitHandler(props.navigation);
          }}
        ></RoundButton>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center"
  },
  textCaption: {
    marginTop: 15,
    fontSize: 20
  },
  inputContainer: {
    marginTop: 50
  },
  new_wallet: {},
  join_wallet: {}
});
