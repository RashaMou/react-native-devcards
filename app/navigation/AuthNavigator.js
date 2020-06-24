import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Auth/Login';

const AuthNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
