import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Auth/LoginOLD';
import Home from '../screens/Home';
import CardList from '../screens/cards/CardList';
import DeckList from '../screens/decks/DeckList';

const MainStackNavigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Home' component={DeckList} />
      <Stack.Screen name='Cards' component={CardList} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
