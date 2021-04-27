import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const SUGGESTIONS = [
    {id: 1, name: 'sushi'},
    {id: 2, name: 'sandwich'},
    {id: 3, name: 'seafood'},
    {id: 4, name: 'fried rice'},
]


function onSuggestionPress(item){
    console.log(item)
}

export default function SearchSuggestion(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search suggestions</Text>
            <View style={styles.suggestions}>
                {
                    SUGGESTIONS.map(item => (
                        <TouchableOpacity 
                            key={item.id} 
                            style={styles.suggestion}
                            onPress={() => onSuggestionPress(item)}>
                            <Text style={styles.suggestionName}>{item.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    suggestions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        marginVertical: 20
    },
    suggestion: {
        marginBottom: 15,
        marginRight: 15,
        padding: 10,
        backgroundColor: '#eeeeee',
        width: 100,
        height: 40,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    suggestionName: {
        fontWeight: 'bold'
    }

})