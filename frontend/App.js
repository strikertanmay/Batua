import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Welcome from './screens/Welcome';

import { useScreens } from 'react-native-screens';

import AppNavigator from './Navigation';
// import Register from './screens/Register';

useScreens();

export default function App() {
  return (
      <AppNavigator />
      
      // <Register/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
