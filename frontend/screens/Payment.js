import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Colors from "../constants/Colors";

import SmallRoundButton from "../component/SmallRoundButton";
import RoundButton from "../component/RoundButton";

const Payment = props => {
  const numInputHandler = navigation => {};

  const paymentHandler = props => {};

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.card}>
          <View>
            <Text style={{ fontSize: 16 }}>Wallet Details</Text>
            <Text style={{ fontSize: 24 }}>₹ 800</Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <SmallRoundButton
              text="Add Money"
              handler={() => {
                props.navigation.navigate("AddMoney");
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text>Phone Number</Text>
        <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1,
            height: 40,
            borderRadius: 30,
            marginTop: 10
          }}
          onChangeText={numInputHandler}
        />
        <Text style={{ marginTop: 15 }}>Amount</Text>
        <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1,
            height: 40,
            borderRadius: 30,
            marginTop: 10
          }}
          onChangeText={numInputHandler}
        />
        <RoundButton
          text={"Pay"}
          style={{ width: 100, backgroundColor: Colors.GREEN_DARK }}
          handler={() => {
            paymentHandler();
          }}
        />
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  Container: {},
  header: {
    padding: 30,
    backgroundColor: Colors.GREEN_LIGHT
  },
  card: {
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10
  },
  formContainer: {
    paddingVertical: 40,
    paddingHorizontal: 30
  }
});
