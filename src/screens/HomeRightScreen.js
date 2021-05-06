import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, FlatList, Image } from 'react-native';
import { PRIMARYCOLOR } from '../../assets/js/commonColors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import recipies from './../../apis/recipesapi';

const screenWidth = Dimensions.get('window').width;
const cardSize = screenWidth / 2 - 30;

export default class HomeRightScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            recipes: this.props.data != undefined ? this.props.data : recipies
        }
        this.renderRecipeItem = this.renderRecipeItem.bind(this);
        this.onFavoriteButtonPress = this.onFavoriteButtonPress.bind(this);
    }

    onFavoriteButtonPress(id){
        let {recipes} = this.state;
        let recipe = recipes[id];
        recipe.selected = !recipe.selected;
        recipes[id] = recipe;

        this.setState({recipes: recipes});
    }

    renderRecipeItem({item}){
        let {chef} = item;
        let {category} = item;

        let IconName = item.selected ? 'favorite' : 'favorite-border';
        let {navigation} = this.props;

        return (
            <View style={styles.recipeItem}>
                <View style={styles.chef}>
                    <Image style={styles.chefImage} source={{uri: chef.image}}/>
                    <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
                        <Text style={styles.chefName}>{chef.name}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.recipeImageContainer}>
                    <Image style={styles.recipeImage} source={{uri: item.image}} />
                    <TouchableOpacity style={styles.favoriteContainer} 
                        onPress={() => this.onFavoriteButtonPress(item.id - 1)}>
                        <MaterialIcons name={IconName} color="white" size={25}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.recipeName}>{item.name}</Text>
                <View style={styles.recipeInfo}>
                    <Text style={styles.receiptCategory}>{category.name}</Text>
                    <View style={styles.dot} />
                    <Text style={styles.duration}>{item.timeTaken}</Text>
                </View>
            </View>
        )
    }
 
    render(){
        let {recipes} = this.state;
        return (
           <View style={styles.container}>
               <FlatList
                    data={recipes}
                    showsVerticalScrollIndicator={false}
                    renderItem={this.renderRecipeItem}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    listKey={(item, index) => 'D' + index.toString()}>
               </FlatList>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARYCOLOR,
        flex: 1,
        padding: 10,
    },
    recipeItem: {
        width: cardSize,
        marginRight: 20,
        marginVertical: 25
    },
    chef: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    chefName: {
        fontWeight: 'bold',
        marginLeft: 10

    },
    chefImage: {
        height: 30,
        width: 30,
        borderRadius: 10
    },
    recipeImageContainer: {
        marginVertical: 15
    },
    recipeImage: {
        height: 150,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    recipeName: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 7
    },
    recipeInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    receiptCategory: {
        color: 'grey',
        fontWeight: '600'
    },
    dot: {
        height: 6,
        width: 6,
        borderRadius: 3,
        backgroundColor: 'grey',
        marginHorizontal: 8
    },
    duration: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    favoriteContainer: {
        backgroundColor: "rgba(211,211,211, .7)",
        width: 40, 
        height: 40,
        position: 'absolute',
        right: 0,
        margin: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})