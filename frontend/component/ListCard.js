import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import Colors from "../constants/Colors";

const ListCard = props => {
  if (!props.transaction) {
    return (
      <View>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate({
              routeName: "PersonTransactionScreen",
              params: { id: props.data.unique_id }
            });
          }}
        >
          <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>{props.data.name}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>{props.data.name}</Text>
        <Text style={{ color: Colors.GREEN_DARK, fontSize: 20 }}>{"-"+props.data.amount+".00"}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    fontSize: 20,
    borderColor: "#EEEEEE",
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default ListCard;
