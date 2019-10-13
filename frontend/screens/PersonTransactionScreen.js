import React from "react";

import { View, StyleSheet, Text, FlatList } from "react-native";

import { TRANSACTIONS, MEMBERS } from "../constants/dummy-data";
import Colors from "../constants/Colors";
import ListCard from "../component/ListCard";

const PersonTransactionScreen = props => {
  const categoryId = props.navigation.getParam("id");

  const selectedCategories = TRANSACTIONS.filter(
    category => category.by === categoryId
  );

  const renderListItem = data => {
    return (
      <ListCard
        data={data.item}
        navigation={props.navigation}
        transaction={true}
      />
    );
  };

  return (
    <View>
      <View style={styles.member}>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>TRANSACTIONS</Text>
        <FlatList
          keyExtractor={(item, index) => item.unique_id}
          data={selectedCategories}
          renderItem={renderListItem}
        ></FlatList>
      </View>
    </View>
  );
};

PersonTransactionScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("id");

  const selectedCategory = MEMBERS.find(
    category => category.unique_id === categoryId
  );

  return {
    headerTitle: selectedCategory.name,
    headerStyle: {
      backgroundColor: Colors.TEAL
    },
    headerTintColor: "white"
  };
};

const styles = StyleSheet.create({
  member: {
    padding: 30
  }
});

export default PersonTransactionScreen;
