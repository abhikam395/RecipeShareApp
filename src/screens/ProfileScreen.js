import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ProfileScreen extends Component{
    render(){
        return (
            <View>
                <Text>ProfileScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})