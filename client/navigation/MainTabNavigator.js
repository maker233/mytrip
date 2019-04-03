import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import StatsScreen from '../screens/Stats';

import ProfileScreen from '../screens/Profile';
import RunsScreen from '../screens/Runs/Runs';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const StatsStack = createStackNavigator({
  Stats: StatsScreen,
});

StatsStack.navigationOptions = {
  tabBarLabel: 'Datos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-document' : 'md-document'}
    />
  ),
};

const RunsStack = createStackNavigator({
  Runs: RunsScreen,
});

RunsStack.navigationOptions = {
  tabBarLabel: 'Rutas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
};


const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-man' : 'md-man'}
    />
  ),
};




export default createBottomTabNavigator({
  HomeStack,
  StatsStack,
  RunsStack,
  ProfileStack,
});
