import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import HomeScreen from './HomeScreen';
import UploadScreen from './UploadScreen';
import ScanSreen from './ScanScreen';
import ProfileScreen from './ProfileScreen';
import NotificationScreen from './NotificationScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { GREENCOLOR } from '../../assets/js/commonColors';
import { HomeRouteScreen } from './HomeRouteScreen';

export default class MainScreen extends Component{

    constructor(){
        super();
        this.navigateToScanScreen = this.navigateToScanScreen.bind(this);
    }

    navigateToScanScreen(){
        let {navigation} = this.props;
        navigation.navigate('Scan');
    }

    render(){
        return (
            <Tab.Navigator 
                initialRouteName="Profile"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Home') {
                            return <Ionicons name={focused ? 'home-sharp' :  'home-outline'} size={18}/>
                        }
                        else if (route.name == 'Profile'){
                            return <FontAwesomeIcons name={focused ? 'user' :  'user-o'} size={18}/>
                        }
                        else if (route.name == 'Notification'){
                            return <Ionicons name={focused ? 'notifications' :  'md-notifications-outline'} size={18}/>
                        }
                            
                        else if (route.name === 'Upload') {
                            if(focused)
                                return <Octicons name="pencil" size={18}/>
                            else 
                                return <SimpleLineIcons name="pencil" size={18}/>
                        }
                        else if (route.name === "Scan"){
                            return (
                                <TouchableOpacity style={styles.scanIcon} onPress={this.navigateToScanScreen}>
                                    <AntDesign name='scan1' size={22} style={{color: 'white', marginTop: 20}}/>
                                </TouchableOpacity>
                            )
                        }
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    style: {
                        height: 50,
                    },
                    labelStyle: {
                        color: 'black',
                        fontSize: 12,
                        paddingBottom: 5
                    }
                  }}
                >
                <Tab.Screen name="Home" component={HomeRouteScreen} />
                <Tab.Screen name="Upload" component={UploadScreen} />
                <Tab.Screen name="Scan" component={ScanSreen} />
                <Tab.Screen name="Notification" component={NotificationScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scanIcon: {
        backgroundColor: GREENCOLOR,
        borderRadius: 30,
        height: 60,
        width: 60,
        marginBottom: 30,
        alignItems: 'center',
        zIndex: 10
    }
})