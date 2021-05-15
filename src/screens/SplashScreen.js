import React, {Component} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GREENCOLOR } from '../../assets/js/commonColors';
import icon from './../../assets/images/foods.png';

export default class SplashScreen extends Component{

    constructor(){
        super();
        this.navigateToHome = this.navigateToHome.bind(this);
    }

    navigateToHome(){
        let {navigation} = this.props;
        navigation.navigate('Home');
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={icon} style={styles.icon}/>
                <Text style={styles.title}>Start Cooking</Text>
                <Text style={styles.subtitle}>Let's join our community to cook better food.</Text>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={this.navigateToHome}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    icon: {
        width: '100%',
        height: 450,
        marginVertical: 20
    },
    title: {
        fontSize: 24,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    subtitle: {
        lineHeight: 20,
        fontSize: 18,
        fontWeight: '500',
        width: '80%',
        textAlign: 'center',
        marginVertical: 18
    },
    button: {
        height: 56,
        backgroundColor: GREENCOLOR,
        width: '85%',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 80
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})