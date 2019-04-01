import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';


//Vistas
import LoginScreen from "../screens/auth/Login"
import SigninScreen from "../screens/auth/Singin"
import EditProfileScreen from "../screens/EditProfile"

import RunsScreen from '../screens/Runs/Runs';
import CreateRunScreen from '../screens/Runs/CreateRun';

import StepsScreen from "../screens/Steps"


import RunTabNavigator from './RunNavigator';
import MainTabNavigator from './MainTabNavigator';


const LoginNavigator = createStackNavigator({ Login: LoginScreen });
const SigninNavigator = createStackNavigator({ Signin: SigninScreen });

const EditProfileNavigator = createStackNavigator({ EditProfile: EditProfileScreen });
const StepsNavigator = createStackNavigator({ Steps: StepsScreen });

const CreateRunNavigator = createStackNavigator({ CreateRun: CreateRunScreen });
const RunsNavigator = createStackNavigator({ Runs: RunsScreen });

// const StepsNavigator = createStackNavigator({ Steps: StepScreen });

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,

  Run: RunTabNavigator,
  CreateRun: CreateRunNavigator,
  Runs: RunsNavigator,

  Login: LoginNavigator,
  Signin: SigninNavigator,
  EditProfile: EditProfileNavigator,
  Steps: StepsNavigator,
  Runs: RunsNavigator,

  // Steps: StepsNavigator,
},{
  initialRouteName: 'Main'
}))

// duda auth react native
setUser = (userObj) => {
  this.setState({loggedInUser: userObj})
}