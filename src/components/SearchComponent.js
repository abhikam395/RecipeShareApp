import React, {Component} from 'react';
import { Dimensions, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const width = Dimensions.get('window').width;
const textInputWidth = width - 100;

export default class SearchComponent extends Component {

    constructor(){
        super();
        this.state = {
            inputText: "",
        }
        this.clearInput = this.clearInput.bind(this);
        this.pressBackButton = this.pressBackButton.bind(this);
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
    }

    pressBackButton(){
        let {navigation} = this.props;
        navigation.goBack();
    }

    clearInput(){
        this.setState({inputText: ""});
    }

    onSearchTextChange(input){
        if(input != "")
            this.setState({inputText: input})
        else
            this.setState({inputText: ""})
    }

    render(){
        let {inputText} = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.backIcon} 
                    onPress={this.pressBackButton}>
                    <Ionicons name="chevron-back-outline" size={20} color="black"/>
                </TouchableOpacity>
                <View style={styles.searchbar} >
                        <Ionicons name="search" size={20}/>
                        <TextInput placeholder="Search" 
                            style={styles.input}
                            onTouchStart={this.navigateToSearchScreen}
                            onChangeText={this.onSearchTextChange}
                            autoFocus
                            value={inputText}/>
                        {inputText != "" && (
                            <MaterialIcons 
                                name="cancel" 
                                size={20} 
                                color="black"
                                onPress={this.clearInput}/>
                            )
                        }
                    </View>
                <TouchableOpacity style={styles.filterIcon}>
                    <Ionicons name="filter" size={20} color="black"/>
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
        paddingHorizontal: 35,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchbar: {
        backgroundColor: '#eeeeee',
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