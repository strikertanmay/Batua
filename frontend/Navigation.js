import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Otp from "./screens/Otp";
import OptSelect from "./screens/Optselect";
import Register from './screens/Register';
import Payment from './screens/Payment';
import Profile from './screens/Profile';


const mainFlowNavigator = createMaterialBottomTabNavigator(
  {
    Payment,
    Profile
  }
);

const initialFlowNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome
    },
    Login,
    Otp,
    OptSelect,
    Register,
    Payment,
    MainFlow: mainFlowNavigator
  },{
      headerMode: 'none',
  }
);

export default createAppContainer(initialFlowNavigator);
