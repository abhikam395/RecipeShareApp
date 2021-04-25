import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ScanScreen extends Component{
    render(){
        return (
            <View>
                <Text>ScanScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})