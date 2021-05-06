import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';;
import SearchScreen from './SearchScreen';
import UserProfileScreen from './UserProfileScreen';

const Stack = createStackNavigator();

export function HomeRouteScreen(){
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            headerMode="none">
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
            />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="UserProfile" component={UserProfileScreen}/>
        </Stack.Navigator>
    )
}