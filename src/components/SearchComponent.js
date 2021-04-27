import React, {Component} from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SearchComponent extends Component {

    constructor(){
        super();
        this.navigateToSearchScreen = this.navigateToSearchScreen.bind(this);
    }

    navigateToSearchScreen(){
        let {navigation} = this.props;
        navigation.navigate('Search');
    }

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.navigateToSearchScreen}>
                    <View style={styles.searchbar} >
                        <Ionicons name="search" size={24}/>
                        <TextInput placeholder="Search" 
                            style={styles.input}
                            onTouchStart={this.navigateToSearchScreen} showSoftInputOnFocus={false}/>
                    </View>
                </TouchableOpacity>
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