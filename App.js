import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './src/screens/MainScreen';
import UploadScreen from './src/screens/UploadScreen';
import ProductScreen from './src/screens/ProductScreen';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode="none" initialRouteName="Splash">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Upload" component={UploadScreen}/>
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Splash" component={SplashScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
