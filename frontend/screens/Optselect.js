import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Otpselect = props => {
  return (
    <View style={styles.Container}>
      <View style={styles.new_wallet}>
        <View style={styles.section_header}>
          <View style={styles.heading}>
            <Text>CREATE NEW</Text>
            <Text>WALLET</Text>
          </View>
          <View style={styles.image}>
            <Image source={require("../assets/opt_1.png")} />
          </View>
        </View>
      </View>
      <View style={styles.join_wallet}>
        <View style={styles.section_header}>
          <View style={styles.heading}>
            <Text>CREATE NEW</Text>
            <Text>WALLET</Text>
          </View>
          <View style={styles.image}>
            <Image source={require("../assets/opt_2.png")} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Otpselect;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  new_wallet: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    width: "100%",
    justifyContent: "center"
  },

  join_wallet: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
    justifyContent: "center"
  },
  section_header: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
