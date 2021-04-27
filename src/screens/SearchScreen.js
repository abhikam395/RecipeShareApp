import React, {Component} from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import Divider from '../components/DividerComponent';
import LastSearchComponent from '../components/LastSearchComponent';
import SearchComponent from '../components/SearchComponent';
import SearchSuggestion from '../components/SearchSuggestion';

const width = Dimensions.get('window').width;
const textInputWidth = width - 100;

export default class SearchScreen extends Component {

    render(){
        return (
            <View style={styles.container}>
                <SearchComponent {...this.props}/>
                <Divider />
                <LastSearchComponent />
                <Divider />
                <SearchSuggestion />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    searchbar: {
        backgroundColor: 'lightgray',
        height: 60,
        borderRadius: 30,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        color: 'black',
        width: textInputWidth
    },
    input: {
        width: '85%',
        height: 60,
        fontSize: 16,
        padding: 10
    },
    filterIcon: {
        marginHorizontal: 10
    },
    backIcon: {
        marginHorizontal: 10
    }
})