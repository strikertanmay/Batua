import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import SmallRoundButton from "../component/SmallRoundButton";

const Otpselect = props => {
  const submitHandler = navigation => {
    navigation.replace("MainFlow");
  };

  return (
    <View style={styles.Container}>
      <View style={styles.new_wallet}>
        <View style={styles.section_header}>
          <View style={styles.heading}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>CREATE NEW</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>WALLET</Text>
          </View>
          <View style={styles.image}>
            <Image source={require("../assets/opt_1.png")} />
          </View>
        </View>
        <View>
          <Text style={styles.content}>
            Create a new wallet, add money and members and start doing payments
            instantly.
          </Text>
        </View>
        <View>
          <SmallRoundButton
            text={"CREATE"}
            handler={() => {
              submitHandler(props.navigation);
            }}
          />
        </View>
      </View>
      <View style={styles.join_wallet}>
        <View style={styles.section_header}>
          <View style={styles.heading}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              JOIN EXISTING
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>WALLET</Text>
          </View>
          <View style={styles.image}>
            <Image source={require("../assets/opt_2.png")} />
          </View>
        </View>
        <View>
          <Text style={styles.content}>
            When joining an existing wallet, you will be added as a member and
            you can start doing payments instantly.
          </Text>
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
  },
  heading: {
    paddingLeft: 20
  },
  content: {
    padding: 20,
    color: "#777777"
  }
});
