import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeckList from '../screens/decks/DeckList';
import MainStackNavigator from './StackNavigator';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={MainStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
