import React, {Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FirstUploadScreen extends Component{

    constructor(){
        super();
        this.pickImage = this.pickImage.bind(this);
    }

    pickImage(){

    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity>
                        <Text style={styles.cancelLabel}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.currentPage}>1/<Text style={{color: 'grey'}}>2</Text></Text>
                </View>
                <View style={styles.imageContainer}>
                    <Ionicons 
                        name="image" 
                        style={styles.image} 
                        size={70}/>
                    <TouchableOpacity onPress={this.pickImage}>
                        <Text style={styles.imageLabel}>Add Cover Photo</Text>
                    </TouchableOpacity>
                    <Text style={styles.sizeLabel}>(up to 12 Mb)</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    cancelLabel: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    currentPage: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 'auto'
    },
    imageContainer: {
        width: '100%',
        height: 200,
        marginVertical: 20,
        borderRadius: 10,
        borderColor: 'lightgrey',
        borderWidth: 2,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 10,
        color: 'grey'
    },
    imageLabel: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    sizeLabel: {
        color: 'grey',
        marginTop: 5
    }
})