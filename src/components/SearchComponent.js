import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SearchComponent extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.searchbar}>
                    <Ionicons name="search" size={24}/>
                    <TextInput placeholder="Search" style={styles.input}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        paddingHorizontal: 35
    },
    searchbar: {
        backgroundColor: '#eeeeee',
        height: 60,
        borderRadius: 30,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        color: 'black'
    },
    input: {
        width: '100%',
        height: 60,
        fontSize: 16,
        padding: 10
    }
})