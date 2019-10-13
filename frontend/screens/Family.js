import React from "react";
import { Text, View, StyleSheet, ScrollView, Image, FlatList } from "react-native";

import { MEMBERS } from '../constants/dummy-data';
import ListCard from "../component/ListCard";

const renderListItem = (data) => {
  return (<ListCard data={data.item}/>);
};

const Family = props => {
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <Image
            source={require("../assets/wallet.png")}
            style={{ height: 100, width: 180, resizeMode: "stretch" }}
          />
          <Text style={{ fontSize: 24, marginTop: 20, color: '#444444' }}>Aayush's Family</Text>
        </View>
      </View>
      <View style={styles.member}>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>MEMBERS</Text>
        <FlatList data={MEMBERS} renderItem={renderListItem}></FlatList>
      </View>
    </ScrollView>
  );
};

export default Family;

const styles = StyleSheet.create({
  Container: {},
  header: {
    padding: 30,
    backgroundColor: "#FEFEFE",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1
  },
  member: {
    padding: 30
  }
});
