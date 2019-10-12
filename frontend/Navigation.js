import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Otp from "./screens/Otp";
import OptSelect from "./screens/Optselect";

const initialFlowNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome
    },
    Login,
    Otp,
    OptSelect
  },{
      headerMode: 'none',
      initialRouteName: 'OptSelect'
  }
);

export default createAppContainer(initialFlowNavigator);
