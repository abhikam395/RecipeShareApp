import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { GREENCOLOR } from '../../assets/js/commonColors';

export default class PasswordRecoveryScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Password recovery</Text>
                    <Text style={styles.subTitle}>Enter your email to recover your password</Text>
                    <View style={styles.inputContainer}>
                        <FeatherIcon name="inbox" size={22}/>
                        <TextInput placeholder="Email" style={styles.input}/>
                    </View>
                    <TouchableOpacity
                        style={styles.button} 
                        >
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        marginTop: 100,
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    subTitle: {
        marginVertical: 10,
        fontSize: 16
    },
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        borderWidth: 1,
        height: 56,
        borderColor: 'lightgrey',
        width: '100%',
        borderRadius: 28,
        alignItems: 'center',
        paddingHorizontal: 25
    },
    input: {
        paddingHorizontal: 10
    },
    button: {
        height: 56,
        backgroundColor: GREENCOLOR,
        width: '100%',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})