import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GREENCOLOR } from '../../assets/js/commonColors';
import CustomTextInput from '../components/CustomTextInput';

export default class VerifyEmailScreen extends Component{


    constructor(){
        super();
        this.timerInstance = null;
        this.timer = this.timer.bind(this);
        this.state = {
            counter: 20
        }
    }

    componentDidMount(){
        this.timer();
    }

    timer(){
        let context = this;
        this.timer = setInterval(() => {
            let {counter}  = this.state;
            if(counter == 0){
                clearInterval(this.timer);
            }
            else context.setState({counter: counter - 1})
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        let {counter} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Check your email</Text>
                <Text style={styles.statement}>We've sent the code to your email</Text>
                <View style={styles.inputGroup}>
                    <CustomTextInput/>
                    <CustomTextInput/>
                    <CustomTextInput/>
                    <CustomTextInput/>
                </View>
                <Text style={styles.codeExpireLabel}>code expires in:
                    <Text style={styles.timer}>{counter}</Text>
                </Text>
                <TouchableOpacity style={styles.verifyButton}>
                    <Text style={styles.verifyButtonLabel}>Verify</Text>
                </TouchableOpacity>
                <TouchableOpacity style={counter === 0 ? styles.verifyButton: styles.sendButton}>
                    <Text style={counter === 0 ? styles.verifyButtonLabel: styles.sendButtonLabel}>Send again</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        paddingVertical: 50,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    statement: {
        marginVertical: 15,
    },
    inputGroup: {
        height: 50,
        flexDirection: 'row',
        marginVertical: 20
    },
    timer: {
        color: 'red',
    },
    codeExpireLabel: {
        marginVertical: 20,
        fontWeight: 'bold'
    },
    sendButton: {
        height: 56,
        borderWidth: 2,
        borderColor: 'lightgrey',
        marginTop: 20,
        width: '100%',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    verifyButton: {
        height: 56,
        backgroundColor: GREENCOLOR,
        width: '100%',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    sendButtonLabel: {
        fontWeight: 'bold',
        color: 'lightgrey',
        fontSize: 16
    },
    verifyButtonLabel: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    }
})