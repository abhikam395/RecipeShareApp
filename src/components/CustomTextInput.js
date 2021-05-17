import React, {Component} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { GREENCOLOR } from '../../assets/js/commonColors';

export default class CustomTextInput extends Component{

    constructor(){
        super();
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.state = {
            borderColor: 'lightgrey'
        }
    }


    onFocus() {
        this.setState({
            borderColor: GREENCOLOR
        })
    }
    
    onBlur() {
        this.setState({
            borderColor: 'lightgrey'
        })
    }

    render(){
        return (
            <TextInput 
                onBlur={ () => this.onBlur() }
                onFocus={ () => this.onFocus() }
                style={Object.assign({...styles.input}, {borderColor: this.state.borderColor})} 
                maxLength={1} />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 60,
        width: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginRight: 10,
        fontSize: 26,
        textAlign: 'center'
    },
})