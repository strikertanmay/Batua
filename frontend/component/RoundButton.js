import React from "react";

import { StyleSheet, View, TouchableNativeFeedback, Text } from "react-native";

const RoundButton = props => {
  return (
    <View style={{ ...styles.button_container, backgroundColor: "#222222" }}>
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
    height: 40,
    width: 160,
    borderRadius: 50,
    backgroundColor: "white",
    marginTop: 20
  },
  button_content: { flex: 1, alignItems: "center", justifyContent: "center" },
  button_text: {
    color: "white",
    fontSize: 16
  }
});

export default RoundButton;
