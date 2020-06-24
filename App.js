import React, { useState, useEffect } from 'react';
import { YellowBox } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import * as SecureStore from 'expo-secure-store';
import { BottomTabNavigator, AuthNavigator } from './app/navigation/';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  YellowBox.ignoreWarnings([
    'Warning: componentWillReceiveProps',
    'Warning: componentWillMount',
  ]);

  const [isReady, setIsReady] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const checkForToken = async () => {
    const token = await SecureStore.getItemAsync('authToken', {});
    if (token) {
      setIsSignedIn(true);
    }
  };

  useEffect(() => {
    checkForToken();
    console.log(SecureStore.getItemAsync('authToken', {}));
  });

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

  return (
    <Provider store={store}>
      {isReady && (
        <AppLoading
          startAsync={_loadAssetsAsync}
          onFinish={() => setIsReady(true)}
          onError={console.warn}
        />
      )}
      <NavigationContainer>
        {isSignedIn ? <BottomTabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Provider>
  );
}
