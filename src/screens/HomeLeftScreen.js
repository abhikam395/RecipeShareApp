import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, FlatList, Image } from 'react-native';
import { PRIMARYCOLOR } from '../../assets/js/commonColors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DeviceHeight = Dimensions.get('window').height;
const url = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80';

const RECIPIES = [
    {id: 1, name: 'Pancake', 
        chef: {id: 1, name: 'Calum Lewis', image: url}, 
        image: url, timeTaken: ' > 60 min', category: {id: 1, name: 'Food'}, selected: false},
    {id: 2, name: 'Salad', 
        chef: {id: 1, name: 'Calum Lewis', image: url}, 
        image: url, timeTaken: ' > 60 min', category: {id: 1, name: 'Food'}, selected: false},
    {id: 3, name: 'Pancake', 
        chef: {id: 1, name: 'Calum Lewis', image: url}, 
        image: url, timeTaken: ' > 60 min', category: {id: 1, name: 'Food'}, selected: false},
    {id: 4, name: 'Pancake', 
        chef: {id: 1, name: 'Calum Lewis', image: url}, 
        image: url, timeTaken: ' > 60 min', category: {id: 1, name: 'Food'}, selected: false},
    {id: 5, name: 'Pancake', 
        chef: {id: 1, name: 'Calum Lewis', image: url}, 
        image: url, timeTaken: ' > 60 min', category: {id: 1, name: 'Food'}, selected: false},
    {id: 6, name: 'Pancake', 
        chef: {id: 1, name: 'Calum Lewis', image: url}, 
        image: url, timeTaken: ' > 60 min', category: {id: 1, name: 'Food'}, selected: false}
]

export default class HomeLeftScreen extends Component{

    constructor(){
        super();
        this.state = {
            recipes: RECIPIES
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

        return (
            <View style={styles.recipeItem}>
                <View style={styles.chef}>
                    <Image style={styles.chefImage} source={{uri: chef.image}}/>
                    <Text style={styles.chefName}>{chef.name}</Text>
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
                    renderItem={this.renderRecipeItem}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}>
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
        flex: 1,
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