import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Otp from "./screens/Otp";
import OptSelect from "./screens/Optselect";
import Register from './screens/Register';
import Payment from './screens/Payment';
import Profile from './screens/Profile';


const MainFlowNavigator = createMaterialBottomTabNavigator(
  {
    Payment,
    Profile
  }
);

const InitialFlowNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome
    },
    Login,
    Otp,
    OptSelect,
    Register,
    MainFlow: MainFlowNavigator
  },{
      headerMode: 'none',
  }
);

export default createAppContainer(initialFlowNavigator);
