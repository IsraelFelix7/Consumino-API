import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_300Light, Roboto_500Medium } from '@expo-google-fonts/roboto';

import Home from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar backgroundColor="#2F48D4" barStyle="light-content" />
      <Home />
    </>
  );
}