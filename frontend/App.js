import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Welcome from './screens/Welcome';

import { useScreens } from 'react-native-screens';

import AppNavigator from './Navigation';

useScreens();

export default function App() {
  return (
      <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
