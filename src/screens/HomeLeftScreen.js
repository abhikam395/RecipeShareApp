import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { PRIMARYCOLOR } from '../../assets/js/commonColors';

const DeviceHeight = Dimensions.get('window').height;

export default class HomeLeftScreen extends Component{

    constructor(){
        super();
    }

 
    render(){
        return (
           <View style={styles.container}>
               <Text>Left</Text>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARYCOLOR,
        flex: 1,
        // height: DeviceHeight
    }
})