import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';


//Vistas
import LoginScreen from "../screens/auth/Login"
import SigninScreen from "../screens/auth/Singin"
import EditProfileScreen from "../screens/EditProfile"

import RunCardScreen from '../screens/Runs/RunCard';
import MyRunsScreen from '../screens/Runs/MyRuns';
import RunScreen from '../screens/Runs/Run';
import RunsScreen from '../screens/Runs/Runs';
import CreateRunScreen from '../screens/Runs/CreateRun';
import RankRunScreen from '../screens/Runs/RankRun';

import StepsScreen from "../screens/Steps"
import CameraScreen from "../screens/Camera"
import StatsScreen from "../screens/Stats"


import RunTabNavigator from './RunNavigator';
import MainTabNavigator from './MainTabNavigator';


const LoginNavigator = createStackNavigator({ Login: LoginScreen });
const SigninNavigator = createStackNavigator({ Signin: SigninScreen });

const EditProfileNavigator = createStackNavigator({ EditProfile: EditProfileScreen });
const StepsNavigator = createStackNavigator({ Steps: StepsScreen });
const CameraNavigator = createStackNavigator({ Camera: CameraScreen });

const RunCardNavigator = createStackNavigator({ RunCard: RunCardScreen });
const CreateRunNavigator = createStackNavigator({ CreateRun: CreateRunScreen });
const RunsNavigator = createStackNavigator({ Runs: RunsScreen });
const RunNavigator = createStackNavigator({ Run: RunScreen });
const MyRunsNavigator = createStackNavigator({ MyRuns: MyRunsScreen });
const RankRunNavigator = createStackNavigator({ RankRun: RankRunScreen });
const StatsNavigator = createStackNavigator({ Stats: StatsScreen });

// const StepsNavigator = createStackNavigator({ Steps: StepScreen });

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,

  RunCard: RunCardNavigator,
  RunTab: RunTabNavigator,
  CreateRun: CreateRunNavigator,
  Runs: RunsNavigator,
  Run: RunNavigator,
  MyRuns: MyRunsNavigator,
  RankRun: RankRunNavigator,

  Login: LoginNavigator,
  Signin: SigninNavigator,
  EditProfile: EditProfileNavigator,
  Steps: StepsNavigator,
  Camera: CameraNavigator,
  Stats: StatsNavigator,
  

  // Steps: StepsNavigator,
},{
  initialRouteName: 'Login'
}))

// duda auth react native
setUser = (userObj) => {
  this.setState({loggedInUser: userObj})
}