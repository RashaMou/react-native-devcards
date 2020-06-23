import React, { useState } from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import MainNavigator from './app/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './store/store';

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

  return (
    <Provider store={store}>
      {isReady && (
        <AppLoading
          startAsync={_loadAssetsAsync}
          onFinish={() => setIsReady(true)}
          onError={console.warn}
        />
      )}
      <MainNavigator />
    </Provider>
  );
}
