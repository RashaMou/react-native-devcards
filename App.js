import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import Login from './app/Auth/Login.js';
import Home from './app/screens/Home';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const cacheImages = (images) => {
    return images.map((image) => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  };

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([require('./assets/bg.jpg')]);
    await Promise.all([...imageAssets]);
  };

  {
    isReady && (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
