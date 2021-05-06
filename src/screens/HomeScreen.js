import React, {Component, Fragment} from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';

import CategoryComponent from '../components/CategoryComponent';
import HomeLeftScreen from './HomeLeftScreen';
import HomeRightScreen from './HomeRightScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GREENCOLOR } from '../../assets/js/commonColors';
import Divider from '../components/DividerComponent';
const Tab = createMaterialTopTabNavigator();

export default class HomeScreen extends Component{

    constructor(){
        super();
        this.navigateToSearchScreen = this.navigateToSearchScreen.bind(this);
    }

    navigateToSearchScreen(){
        let {navigation} = this.props;
        navigation.navigate('Search');
    }

    render(){
        return (
            <FlatList 
                ListHeaderComponent={
                    <Fragment>
                        <View style={styles.searchbarContainer}>
                            <TouchableOpacity onPress={this.navigateToSearchScreen}>
                                <View style={styles.searchbar} >
                                    <Ionicons name="search" size={24}/>
                                    <TextInput placeholder="Search" 
                                        style={styles.input}
                                        onTouchStart={this.navigateToSearchScreen} 
                                        showSoftInputOnFocus={false}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <CategoryComponent />
                        <Divider />
                    </Fragment>
                }
                style={styles.container}
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
                            <Tab.Screen name="Left" component={HomeLeftScreen} />
                            <Tab.Screen name="Right" component={HomeRightScreen} />
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
        backgroundColor: 'white',
    },
    searchbarContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        paddingHorizontal: 35
    },
    searchbar: {
        backgroundColor: '#eeeeee',
        height: 60,
        borderRadius: 30,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        color: 'black'
    },
    input: {
        width: '100%',
        height: 60,
        fontSize: 16,
        padding: 10
    }
})

// export default class SearchComponent extends Component {

//     constructor(){
//         super();
//         this.state = {
//             inputText: null,
//         }
//         this.clearInput = this.clearInput.bind(this);
//         this.onSearchTextChange = this.onSearchTextChange.bind(this);
//         console.log(this.props)
//     }

//     pressBackButton(){
//         let {navigation} = this.props;
//         console.log(navigation)
//     }

//     clearInput(){
//         this.setState({inputText: ""});
//     }

//     onSearchTextChange(input){
//         if(input != "")
//             this.setState({inputText: input})
//         else
//             this.setState({inputText: null})
//     }

//     render(){
//         let {inputText} = this.state;
//         return (
//             <View style={styles.container}>
//                 <TouchableOpacity style={styles.backIcon}>
//                     <Ionicons name="chevron-back-outline" size={20} color="black"/>
//                 </TouchableOpacity>
//                 <View style={styles.searchbar} >
//                         <Ionicons name="search" size={20}/>
//                         <TextInput placeholder="Search" 
//                             style={styles.input}
//                             onTouchStart={this.navigateToSearchScreen}
//                             onChangeText={this.onSearchTextChange}
//                             autoFocus
//                             value={inputText}/>
//                         {inputText != null && (
//                             <MaterialIcons 
//                                 name="cancel" 
//                                 size={20} 
//                                 color="black"
//                                 onPress={this.clearInput}/>
//                             )
//                         }
//                     </View>
//                 <TouchableOpacity style={styles.filterIcon}>
//                     <Ionicons name="filter" size={20} color="black"/>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         height: 100,
//         justifyContent: 'center',
//         paddingHorizontal: 35,
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     searchbar: {
//         backgroundColor: '#eeeeee',
//         height: 60,
//         borderRadius: 30,
//         alignSelf: 'center',
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal: 25,
//         color: 'black',
//         width: textInputWidth
//     },
//     input: {
//         width: '85%',
//         height: 60,
//         fontSize: 16,
//         padding: 10
//     },
//     filterIcon: {
//         marginHorizontal: 10
//     },
//     backIcon: {
//         marginHorizontal: 10
//     }
// })