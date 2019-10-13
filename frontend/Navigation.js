import React from "react";

import { Image } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

<<<<<<< HEAD
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
=======
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import Colors from "./constants/Colors";
>>>>>>> bdc54ddd92fdd5582e74afec4e69cd45d6f178ef

import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Otp from "./screens/Otp";
import OptSelect from "./screens/Optselect";
import Register from "./screens/Register";
import Payment from "./screens/Payment";
import Profile from "./screens/Profile";
import Family from "./screens/Family";
import AddMoney from './screens/Addmoney';
import PersonTransactionScreen from './screens/PersonTransactionScreen';

const PaymentNavigator = createStackNavigator({
  Pay: {
    screen: Payment,
    navigationOptions: {
      headerTitle: "Batua",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    }
  },
  AddMoney: {
    screen: AddMoney,
    navigationOptions: {
      headerTitle: "Add Money",
    }
  }
});

const FamilyNavigator = createStackNavigator({
  FamilyGlance: {
    screen: Family,
    navigationOptions: {
      headerTitle: "Family",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    }
  },
  PersonTransactionScreen: {
    screen: PersonTransactionScreen
  }

});

const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "My Profile",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    }
  }
});

const MainFlowNavigator = createMaterialBottomTabNavigator(
  {
    Family: {
      screen: FamilyNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-people" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.BLUE_DARK
      }
    },
    Payment: {
      screen: PaymentNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Image
              source={require("./assets/icon.png")}
              style={{ height: 20, width: 20, resizeMode: "stretch" }}
            />
          );
        },
        tabBarColor: "#222222"
      }
    },
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-contact" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.GREEN_DARK
      }
    }
  },
  {
    initialRouteName: "Family",
    shifting: true
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
  },
  {
    headerMode: "none",
    initialRouteName: "MainFlow"
  }
);

export default createAppContainer(InitialFlowNavigator);