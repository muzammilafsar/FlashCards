import React from 'react';
import { Platform, Animated, Easing } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import CreateDeck from '../screens/CreateDeck';
import DeckDetail from '../screens/DeckDetail';
import AddCard from '../screens/AddCard';
import Quiz from '../screens/Quiz';
import NoCards from '../screens/NoCards';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  DeckDetail: DeckDetail,
  AddCard: AddCard,
  Quiz: Quiz,
  NoCards: NoCards
});


HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  transitionSpec: {
    duration: 300,
    easing: Easing.inOut(Easing.poly(4)),
    timing: Animated.timing,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};


const CreateDeckStack = createStackNavigator({
  AddDeck: CreateDeck,
});

CreateDeckStack.navigationOptions = {
  tabBarLabel: 'Create Deck',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-add`
          : 'md-add'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CreateDeckStack,
});
