import React from 'react';
import {Image} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Welcome from '../screens/welcome';
// import Login from '../screens/login';
// import Otp from '../screens/otp';
// import Register from '../screens/register'
// import Optselect from '../screens/optselect';

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

