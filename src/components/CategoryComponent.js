import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default class CategoryComponent extends Component {

    constructor(){
        super();
        this.state = {
            selectedCategoryId: 1,
        }
        this.categories = [
            {id: 1, name: 'All'},
            {id: 2, name: 'Food'},
            {id: 3, name: 'Drink'},
        ]
        this.renderCategory = this.renderCategory.bind(this);
    }

    renderCategory({item}){
        let {selectedCategoryId} = this.state;

        let categoryStyle = item.id === selectedCategoryId ? 
            Object.assign({...styles.category}, styles.selected) 
            : Object.assign({...styles.category}, styles.unselected);

        let textStyle = item.id === selectedCategoryId 
            ? styles.selectedText: styles.unSelectedText

        return (
           <TouchableOpacity 
                onPress={() => this.setState({selectedCategoryId: item.id})}>
                <View style={categoryStyle} >
                    <Text style={textStyle}>{item.name}</Text>
                </View>
           </TouchableOpacity>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.searchbar}>
                    <Text style={styles.title}>Category</Text>
                    <FlatList
                        horizontal
                        data={this.categories}
                        renderItem={this.renderCategory}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={styles.categories}>
                    </FlatList>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    categories: {
        marginVertical: 20
    },
    category: {
        backgroundColor: '#00c853',
        padding: 20,
        height: 50,
        minWidth: 60,
        marginRight: 10,
        borderRadius: 25,
        justifyContent: 'center',
        color: 'red'
    },
    selected: {
        backgroundColor: '#00c853',
    },
    unselected: {
        backgroundColor: '#eeeeee',
    },
    selectedText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },
    unSelectedText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'grey'
    }
})