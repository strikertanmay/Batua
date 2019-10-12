import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  RoundButton
} from "react-native";

const Register = props => {
  const numInputHandler = (navigation) => { };

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text>First Name</Text>
        <TextInput

          style={{ borderColor: "gray", borderWidth: 1, height: 40 }}
          onChangeText={numInputHandler}

        />
        <Text>Last Name</Text>
        <TextInput

          style={{ borderColor: "gray", borderWidth: 1, height: 40 }}
          onChangeText={numInputHandler}

        />

        <Text>Date of Birth</Text>
        <TextInput

          dataDetectorTypes='calendarEvent'
          style={{ borderColor: "gray", borderWidth: 1, height: 40 }}
          onChangeText={numInputHandler}

        />
        <RoundButton
          text={"Submit"}
          handler={() => {
            numInputHandler(props.navigation);
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
  new_wallet: {



  },
  join_wallet: {




  }
});
