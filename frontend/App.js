import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// import Welcome from './screens/Welcome';
import Login from './screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
