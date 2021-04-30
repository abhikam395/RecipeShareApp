import React, {Component, Fragment} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DividerComponent from './../components/DividerComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileRecipesScreen from './ProfileRecipesScreen';
import ProfileLikesScreen from './ProfileLikesScreen';
import { GREENCOLOR } from '../../assets/js/commonColors';

const image = "https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=";
const Tab = createMaterialTopTabNavigator();

export default class ProfileScreen extends Component{
    render(){
        return (
            <FlatList style={styles.container}
                ListHeaderComponent={
                    <Fragment>
                        <TouchableOpacity style={styles.shareIcon}>
                            <Ionicons name="share-social" size={26} color="black"/>
                        </TouchableOpacity>
                        <View style={styles.userContainer}>
                            <Image source={{uri: image}} style={styles.image}/>
                            <Text style={styles.name}>Abhishek kumar</Text>
                            <View style={styles.row}>
                                <View style={styles.box}>
                                    <Text style={styles.value}>32</Text>
                                    <Text style={styles.label}>Recipes</Text>
                                </View>
                                <View style={styles.box}>
                                    <Text style={styles.value}>32</Text>
                                    <Text style={styles.label}>Recipes</Text>
                                </View>
                                <View style={styles.box}>
                                    <Text style={styles.value}>32</Text>
                                    <Text style={styles.label}>Recipes</Text>
                                </View>
                            </View>
                        </View>
                        <DividerComponent />
                    </Fragment>
                }

                ListEmptyComponent={
                    <Fragment>
                         <Tab.Navigator 
                            tabBarOptions={{
                                activeTintColor: 'black',
                                indicatorStyle: {
                                    backgroundColor: GREENCOLOR,
                                    height: 3
                                }
                            }}>
                            <Tab.Screen name="Recipes" component={ProfileRecipesScreen} />
                            <Tab.Screen name="Like" component={ProfileLikesScreen} />
                        </Tab.Navigator>
                    </Fragment>
                }>
            </FlatList>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    shareIcon: {
        alignSelf: 'flex-end',
        margin: 30
    },
    userContainer: {
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 75
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 30
    },
    row: {
        flexDirection: 'row',
        marginTop: 30
    },
    box: {
        flex: 1,
        alignItems: 'center'
    },
    label: {
        marginTop: 5
    },
    value: {
        fontWeight: 'bold',
        fontSize: 20
    }

})