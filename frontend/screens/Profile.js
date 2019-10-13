import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Profile = props => {
  return (
    <View style={styles.Container}>
      <Image source={require('../assets/coffee.png')} style={{ width: 130, height: 130, resizeMode: 'stretch' }} />
      <Text style={{ color: '#AAAAAA', fontSize: 20, marginTop: 30 }}>Nothing's brewing here.</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  }
});
