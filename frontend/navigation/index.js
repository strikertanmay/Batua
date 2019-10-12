import React from 'react';
import {Image} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Welcome from '../screens/Welcome';
// import Login from '../screens/Login';
// import Otp from '../screens/Otp';
// import Register from '../screens/Register'
// import Optselect from '../screens/Optselect';

import {theme} from '../constants';
import { fromBinary } from 'uuid-js';

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

