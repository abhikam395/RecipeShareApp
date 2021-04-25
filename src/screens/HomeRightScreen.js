import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class HomeRightScreen extends Component{

    render(){
        return (
            <Text>Right</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scanIcon: {
        backgroundColor: '#00c853',
        borderRadius: 30,
        height: 60,
        width: 60,
        marginBottom: 30,
        alignItems: 'center',
        zIndex: 10
    }
})