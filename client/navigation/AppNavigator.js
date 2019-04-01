import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';


//Vistas
import LoginScreen from "../screens/auth/Login"
import SigninScreen from "../screens/auth/Singin"
import EditProfileScreen from "../screens/EditProfile"

import StepsScreen from "../screens/Steps"


import RunTabNavigator from './RunNavigator';
import MainTabNavigator from './MainTabNavigator';

const LoginNavigator = createStackNavigator({ Login: LoginScreen });
const SigninNavigator = createStackNavigator({ Signin: SigninScreen });
const EditProfileNavigator = createStackNavigator({ EditProfile: EditProfileScreen });
const StepsNavigator = createStackNavigator({ Steps: StepsScreen });

// const StepsNavigator = createStackNavigator({ Steps: StepScreen });

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Run: RunTabNavigator,

  Login: LoginNavigator,
  Signin: SigninNavigator,
  EditProfile: EditProfileNavigator,
  Steps: StepsNavigator,

  // Steps: StepsNavigator,
},{
  initialRouteName: 'Login'
}))

// duda auth react native
setUser = (userObj) => {
  this.setState({loggedInUser: userObj})
}