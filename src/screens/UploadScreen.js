import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstUploadScreen from './FirstUploadScreen';
import SecondUploadScreen from './SecondUploadScreen';
const Stack = createStackNavigator();

export default class UploadScreen extends Component{
    render(){
        return (
            <Stack.Navigator 
                initialRouteName="FirtUpload" 
                headerMode="none">
                <Stack.Screen name="FirstUpload" component={FirstUploadScreen} />
                <Stack.Screen name="SecondUpload" component={SecondUploadScreen} />
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})