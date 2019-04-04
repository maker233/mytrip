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

import Intro1Screen from "../screens/intro/intro1"
import Intro2Screen from "../screens/intro/intro2"
import Intro3Screen from "../screens/intro/intro3"


import RunTabNavigator from './RunNavigator';
import MainTabNavigator from './MainTabNavigator';


const AuthNavigation = createStackNavigator({ 
  Login: {
    screen: LoginScreen,
    navigationOptions: {header: null}
  }, 
  Signin: {
    screen: SigninScreen,
    navigationOptions: {header: null}
  } 
});

const IntroNavigator = createStackNavigator({ 
  Intro1: {
    screen: Intro1Screen,
    navigationOptions: {header: null}
  }, 
  Intro2: {
    screen: Intro2Screen,
    navigationOptions: {header: null}
  },
  Intro3: {
    screen: Intro3Screen,
    navigationOptions: {header: null}
  }  
});

const EditProfileNavigator = createStackNavigator({ EditProfile: EditProfileScreen });
const StepsNavigator = createStackNavigator({ Steps: StepsScreen });
const CameraNavigator = createStackNavigator({ Camera: CameraScreen });

const RunCardNavigator = createStackNavigator({ RunCard: RunCardScreen });
const CreateRunNavigator = createStackNavigator({ CreateRun: CreateRunScreen });
const RunsNavigator = createStackNavigator({ Runs: RunsScreen, Run: RunScreen, RankRun: RankRunScreen });
const MyRunsNavigator = createStackNavigator({ MyRuns: MyRunsScreen });
// const RankRunNavigator = createStackNavigator({ RankRun: RankRunScreen });
const StatsNavigator = createStackNavigator({ Stats: StatsScreen });

// const StepsNavigator = createStackNavigator({ Steps: StepScreen });

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  
  Intro: IntroNavigator,

  RunCard: RunCardNavigator,
  RunTab: RunTabNavigator,
  CreateRun: CreateRunNavigator,
  Runs: RunsNavigator,
  MyRuns: MyRunsNavigator,
  // RankRun: RankRunNavigator,

  Auth: AuthNavigation,
  EditProfile: EditProfileNavigator,
  Steps: StepsNavigator,
  Camera: CameraNavigator,
  Stats: StatsNavigator,
  

  // Steps: StepsNavigator,
},{
  initialRouteName: 'Auth'
}))
console.disableYellowBox = true;