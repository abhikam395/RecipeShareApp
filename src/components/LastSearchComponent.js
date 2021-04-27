import React, {Component} from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

const LASTSEARCHS = [
    {id: 1, name: 'Pancakes'},
    {id: 2, name: 'Salad'},
];

export default class LastSearchComponent extends Component{
    
    constructor(){
        super();
    }

    renderSearchItem({item}){
        return (
            <TouchableOpacity>
                <View style={styles.searchItem}>
                    <FeatherIcon name="clock" style={styles.historyIcon} size={20}/>
                    <Text style={styles.historyName}>{item.name}</Text>
                    <FeatherIcon name="arrow-up-left" style={styles.arrowIcon} size={20}/>
                </View>
            </TouchableOpacity>
        )
    }
    
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={LASTSEARCHS}
                    renderItem={this.renderSearchItem}
                    keyExtractor={item => item.id.toString()}>

                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%',
    },
    searchItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    historyIcon: {
        marginHorizontal: 10
    },
    historyName: {
        fontSize: 16,
    },
    arrowIcon: {
        marginLeft: 'auto'
    }
})