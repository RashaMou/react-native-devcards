import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Auth/Login';
import Home from '../screens/Home';
import CardList from '../screens/cards/CardList';
import DeckList from '../screens/decks/DeckList';

const MainNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Home' component={DeckList} />
        <Stack.Screen name='Cards' component={CardList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
