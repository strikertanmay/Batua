import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Welcome from './screens/Welcome';
// import Login from './screens/Login';
// import Otp from './screens/Otp';
// import Register from './screens/Register';

export default function App() {
  return (
  
      <Welcome />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
