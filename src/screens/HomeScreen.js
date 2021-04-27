import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, LogBox } from 'react-native';

import CategoryComponent from '../components/CategoryComponent';
import SearchComponent from '../components/SearchComponent';
import HomeLeftScreen from './HomeLeftScreen';
import HomeRightScreen from './HomeRightScreen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GREENCOLOR } from '../../assets/js/commonColors';
const Tab = createMaterialTopTabNavigator();

export default class HomeScreen extends Component{

    componentDidMount(){
        LogBox.ignoreLogs([
            'VirtualizedLists should never be nested', // TODO: Remove when fixed
        ])
    }

    render(){
        return (
            <ScrollView 
                style={styles.container} >
                <SearchComponent {...this.props}/>
                <CategoryComponent />
                <View style={styles.divider}/>

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

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    divider: {
        height: 10,
        backgroundColor: '#eeeeee'
    }
})