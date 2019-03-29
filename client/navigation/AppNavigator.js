import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
//Vistas
import LoginScreen from "../screens/auth/Login"
import SigninScreen from "../screens/auth/Singin"

// import PanelScreen from "../screens/Panel"
// import RunsScreen from "../screens/Runs"
// import ProfileScreen from "../screens/Profile"

// import StepScreen from "../screens/Stepstest"

import MainTabNavigator from './MainTabNavigator';
const LoginNavigator = createStackNavigator({ Login: LoginScreen });
const SigninNavigator = createStackNavigator({ Signin: SigninScreen });

// const PanelNavigator = createStackNavigator({ Panel: PanelScreen });
// const ProfileNavigator = createStackNavigator({ Profile: ProfileScreen });
// const RunsNavigator = createStackNavigator({ Runs: RunsScreen });
// const StepsNavigator = createStackNavigator({ Steps: StepScreen });

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: LoginNavigator,
  Main: MainTabNavigator,
  Signin: SigninNavigator,
  // Panel: PanelNavigator,
  // Panel: ProfileNavigator,
  // Runs: RunsNavigator,
  // Steps: StepsNavigator,
},{
  initialRouteName: 'Signin'
}))