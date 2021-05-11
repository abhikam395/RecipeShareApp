import React, {Component} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GREENCOLOR } from '../../assets/js/commonColors';
import emojiImage from './../../assets/images/emoji.png';

export default class UploadSuccessComponent extends Component{

    constructor(){
        super();
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(){
        let {navigation} = this.props;
        navigation.navigate('Home')
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image source={emojiImage} style={styles.icon}/>
                    <Text style={styles.title}>Upload Success</Text>
                    <Text style={styles.description}>Your recipe has been uploaded, you can see it on your profile.</Text>
                    <TouchableOpacity style={styles.button} onPress={this.onButtonClick}>
                        <Text style={styles.buttonLabel}>Back to home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        backgroundColor: 'white',
        height: '65%',
        width: '90%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 150,
        width: 150
    },
    title: {
        fontWeight: 'bold',
        fontSize: 23,
        marginVertical: 30,
        color: 'darkblue'
    },
    description: {
        fontSize: 18,
        width: '80%',
        textAlign: 'center',
        color: 'darkblue'
    },
    button: {
        backgroundColor: GREENCOLOR,
        height: 50,
        paddingHorizontal: 80,
        borderRadius: 25,
        marginVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
})