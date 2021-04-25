import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class NotificationScreen extends Component{
    render(){
        return (
            <View>
                <Text>NotificationScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})