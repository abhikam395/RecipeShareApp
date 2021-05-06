import React, {Component, Fragment} from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Slider from "@react-native-community/slider";
import RBSheet from "react-native-raw-bottom-sheet";
import Divider from '../components/DividerComponent';
import LastSearchComponent from '../components/LastSearchComponent';
import SearchComponent from '../components/SearchComponent';
import SearchSuggestion from '../components/SearchSuggestion';

import HomeLeftScreen from './HomeLeftScreen';

import recipies from './../../apis/recipesapi';
import CategoryComponent from '../components/CategoryComponent';
import { GREENCOLOR } from '../../assets/js/commonColors';

const width = Dimensions.get('window').width;
const textInputWidth = width - 100;

export default class SearchScreen extends Component {

    constructor(){
        super();
        this.state = {
            searchRecipes: [],
            value: 0.2
        }
        this.searchQuery = this.searchQuery.bind(this);
        this.openBottomSheet = this.openBottomSheet.bind(this);
    }

    componentDidMount(){
        this.bottomSheet.open();
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

    openBottomSheet(){
        this.bottomSheet.open();
    }

    render(){
        let {searchRecipes} = this.state;
        return (
            <View style={styles.container}>
                <SearchComponent 
                    {...this.props} 
                    callback={this.searchQuery} 
                    openSheet={this.openBottomSheet}/>
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
               <RBSheet
                    ref={ref => {
                        this.bottomSheet = ref;
                    }}
                    height={450}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    openDuration={250}
                    customStyles={{container: styles.buttomSheet}}>
                    <View>
                        <Text style={styles.bottomSheetTitle}>Add a Filter</Text>
                        <View style={styles.bottomSheetContent}>
                            <CategoryComponent />
                            <View style={styles.duration}>
                                <Text style={styles.bottomSheetLabel}>
                                    Cooking Duration {""}
                                    <Text style={styles.tint}>(in minutes)</Text>
                                </Text>
                                <View>
                                    {/* <Text style={styles.label}></Text> */}
                                </View>
                                <Slider
                                    useNativeDriver={true}
                                    style={{marginVertical: 30, transform: [{scaleX: 1}, {scaleY: 5}]}}
                                    minimumTrackTintColor={GREENCOLOR}
                                    maximumTrackTintColor="lightgrey"
                                    thumbTintColor={GREENCOLOR}
                                    minimumValue={10}
                                    maximumValue={50}
                                />
                                <View style={styles.buttons}>
                                    <TouchableOpacity style={styles.cancelButton}>
                                        <Text style={styles.cancelLabel}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.doneButton}>
                                        <Text style={styles.doneLabel}>Done</Text>
                                    </TouchableOpacity>
                                </View>
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
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
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
    },
    buttomSheet: {
        alignItems: 'center',
    },
    bottomSheetTitle: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    bottomSheetContent: {
        marginVertical: 10,
        alignItems: 'flex-start',
        minWidth: '100%',
        padding: 10
    },
    bottomSheetLabel: {
        fontWeight: 'bold',
        fontSize: 20
    },
    tint: {
        fontWeight: '400',
        fontSize: 16,
    },
    duration: {
        paddingHorizontal: 20
    },
    slider: {
        color: GREENCOLOR,
    },
    cancelButton: {
        height: 50,
        width: 150,
        backgroundColor: 'lightgrey',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        flexDirection: 'row',
        marginVertical: 20
    },
    cancelLabel: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },
    doneButton: {
        height: 50,
        width: 150,
        backgroundColor: GREENCOLOR,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    doneLabel: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    },
})