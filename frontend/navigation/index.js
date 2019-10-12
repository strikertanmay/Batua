import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
// import Login from '../screens/Login';
// import Otp from '../screens/Otp';
// import Register from '../screens/Register'
// import Optselect from '../screens/Optselect';

import {theme} from '../constants';


const screens = createStackNavigator({
    Welcome,
    // Login,
    // Otp,
    // Register,
    // Optselect,
}, {
    defaultNavigationOptions : {
        headerStyle: {},
        headerBackImage : <Image/>,
        headerbackTitle: null,
        headerLeftContainerStyle : {},
        headerRightContainerStyle : {}
    }
});

export default createAppContainer(screens);

