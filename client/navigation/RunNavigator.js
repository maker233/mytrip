import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ProfileScreen from '../screens/Profile';


import RankRunScreen from '../screens/Runs/RankRun';
import RunsScreen from '../screens/Runs/Runs';
import ChatScreen from '../screens/Runs/Chat';



const ChatStack = createStackNavigator({
  Chat: ChatScreen,
});

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-man' : 'md-man'}
    />
  ),
};

const RankRunStack = createStackNavigator({
  RankRun: RankRunScreen,
});

RankRunStack.navigationOptions = {
  tabBarLabel: 'Ranking',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'}
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
  RankRunStack,
  ChatStack,
  RunsStack,
  ProfileStack,
  
});
