import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AppLoading, Asset} from 'expo';
import Navigation from './navigation';
import {Block} from './components';
import * as constants from './constants';

const images = [
    require('./assets/icon.png')
]

export default function App() {
  state = {
    isLoadingComplete :  false
  }

  handleResourseAsync = async() => {
      const cacheImages = images.map(img => {
        return Asset.fromModule(image).downloadAsync();
      })

      return Promise.all(cacheImages);
  }
  render(){
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen){
        return(
          <AppLoading
            startAsync = {this.handleResourseAsync}
            onError = {error => console.warn(error)}
            onFinish = { () => this.setState({isLoadingComplete : true})}
          
          />
        )
    }
    else{
      return (
        <View style={styles.container}>
          <Navigation />
        </View>
      )
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
