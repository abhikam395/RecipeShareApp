import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GREENCOLOR } from '../../assets/js/commonColors';

let imageUrl = 'https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=6&m=1155240408&s=612x612&w=0&h=SEhOUzsexrBBtRrdaLWNB6Zub65Dnyjk7vVrTk1KQSU=';


export default class ProductScreen extends Component{

    componentDidMount(){
        this.bottomSheet.open();
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={{uri: imageUrl}} style={styles.image}/>
                <RBSheet
                    ref={ref => {
                        this.bottomSheet = ref;
                    }}
                    height={500}
                    openDuration={250}
                    closeOnDragDown={true}
                    customStyles={{container: styles.buttomSheet}}>
                    <View style={styles.bottomSheetContainer}>
                        <Text style={styles.title}>Cacao Maca Walnut Milk</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.category}>Food</Text>
                            <View style={styles.dot} />
                            <Text style={styles.category}>60 mins</Text>
                        </View>
                        <View style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                            <Image 
                                source={{uri: imageUrl}}  
                                style={styles.profileImage}/>
                            <Text style={styles.userName}>Elena Shelby</Text>
                            <View 
                                style={{marginLeft: 'auto', flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity style={styles.likeContainer}>
                                    <MaterialIcons 
                                        name="favorite" 
                                        style={styles.likeIcon}
                                        size={18}/>
                                </TouchableOpacity>
                                <Text style={styles.likes}>273 Likes</Text>
                            </View>
                        </View>
                        <View style={styles.line}/>
                        <Text style={styles.subtitle}>Description</Text>
                        <Text
                            style={styles.description}>
                            Your recipe has been uploaded, 
                            you can see it on your profile. 
                            Your recipe has been uploaded, 
                            you can see it on your</Text>
                        <View style={styles.line}/>
                        <Text style={styles.subtitle}>Ingredients</Text>
                        <View style={styles.ingredientContainer}>
                            <View style={styles.ingredient}>
                                <View style={styles.doneIcon}>
                                    <MaterialIcons name="done" size={18} color={GREENCOLOR}/>
                                </View>
                                <Text style={styles.ingredientLabel}>4 Eggs</Text>
                            </View>
                            <View style={styles.ingredient}>
                                <View style={styles.doneIcon}>
                                    <MaterialIcons name="done" size={18} color={GREENCOLOR}/>
                                </View>
                                <Text style={styles.ingredientLabel}>4 Eggs</Text>
                            </View>
                            <View style={styles.ingredient}>
                                <View style={styles.doneIcon}>
                                    <MaterialIcons name="done" size={18} color={GREENCOLOR}/>
                                </View>
                                <Text style={styles.ingredientLabel}>4 Eggs</Text>
                            </View>
                        </View>
                    </View>
               </RBSheet>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttomSheet: {
        alignItems: 'center',
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
    },
    bottomSheetContainer: {
        width: '100%',
        padding: 20
    },
    box: {
        height: 100,
    },
    image: {
        width: '100%',
        height: 400,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'darkblue'
    },
    category: {
        flexDirection: 'row',
        fontSize: 16,
        marginVertical: 8
    },
    dot: {
        marginHorizontal: 7,
        backgroundColor: 'grey',
        height: 5,
        width: 5,
        borderRadius: 2.5
    },
    profileImage: {
        height: 36,
        width: 36,
        borderRadius: 18
    },
    userName: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'darkblue'
    },
    likeIcon: {
        color: 'white'
    },
    likeContainer: {
        height: 34,
        width: 34,
        borderRadius: 17,
        backgroundColor: GREENCOLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    likes: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'darkblue',
        marginLeft: 10
    },
    line: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'darkblue'
    },
    description: {
        marginVertical: 15,
        lineHeight: 20,
        fontSize: 16,
        fontWeight: '600',
        color: 'grey'
    },
    ingredient: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8
    },
    ingredientLabel: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 15,
    },
    doneIcon: {
        height: 30, 
        width: 30, 
        borderRadius: 15, 
        backgroundColor: 'rgba(0, 200, 83, .1)', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    ingredientContainer: {
        paddingVertical: 20
    }
})