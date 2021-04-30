import React, {Component, Fragment} from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import Divider from '../components/DividerComponent';
import LastSearchComponent from '../components/LastSearchComponent';
import SearchComponent from '../components/SearchComponent';
import SearchSuggestion from '../components/SearchSuggestion';

import HomeLeftScreen from './HomeLeftScreen';

import recipies from './../../apis/recipesapi';

const width = Dimensions.get('window').width;
const textInputWidth = width - 100;

export default class SearchScreen extends Component {

    constructor(){
        super();
        this.state = {
            searchRecipes: []
        }
        this.searchQuery = this.searchQuery.bind(this);
    }

    searchQuery(query){
        if(query == "") {
            this.setState({searchRecipes: []})
            return;
        };
        let searchRecipes = [];
        recipies.forEach(recipe => {
            let recipeName = recipe.name.toLocaleLowerCase();
            if(recipeName.startsWith(query.toLocaleLowerCase())){
                searchRecipes.push(recipe);
            }
        })
        this.setState({searchRecipes: searchRecipes});
    }

    render(){
        let {searchRecipes} = this.state;
        return (
            <View style={styles.container}>
                <SearchComponent {...this.props} callback={this.searchQuery}/>
                <Divider />
               {searchRecipes.length == 0 && (
                   <Fragment>
                        <LastSearchComponent />
                        <Divider />
                        <SearchSuggestion />
                   </Fragment>
               )}
               {searchRecipes.length > 0 && (
                   <View style={styles.contentContainer}>
                        <HomeLeftScreen data={searchRecipes}/>
                  </View>
               )}
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
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    }
})