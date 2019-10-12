import React from "react";

import { StyleSheet, View, TouchableNativeFeedback, Text } from "react-native";

import Colors from '../constants/Colors';

const SmallRoundButton = props => {
  return (
    <View style={{ ...styles.button_container }}>
      <TouchableNativeFeedback onPress={props.handler}>
        <View style={styles.button_content}>
          <Text style={styles.button_text}>{props.text}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  button_container: {
    height: 30,
    width: 100,
    borderRadius: 50,
    backgroundColor: Colors.BLUE_DARK,
    marginLeft: 20
  },
  button_content: { flex: 1, alignItems: "center", justifyContent: "center" },
  button_text: {
    color: "white",
    fontSize: 12
  }
});

export default SmallRoundButton;
