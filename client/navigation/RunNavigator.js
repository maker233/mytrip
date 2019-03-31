import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';


import RankRunScreen from '../screens/Runs/RankRun';
import RunsScreen from '../screens/Runs/Runs';
import ChatScreen from '../screens/Runs/Chat';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Volver',
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




export default createBottomTabNavigator({
  HomeStack,
  RankRunStack,
  RunsStack,
  ChatStack,
});
