import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SearchComponent from '../components/SearchComponent';

const Stack = createStackNavigator();

export function HomeRouteScreen(){
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchComponent} />
        </Stack.Navigator>
    )
}