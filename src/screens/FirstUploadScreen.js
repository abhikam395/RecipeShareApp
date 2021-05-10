import React, {Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import { GREENCOLOR } from '../../assets/js/commonColors';
import Slider from '@react-native-community/slider';

export default class FirstUploadScreen extends Component{

    constructor(){
        super();
        this.state = {
            imagePath: null,
            slideValue: 0,
        }
        this.pickImage = this.pickImage.bind(this);
    }

    pickImage(){
        let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
      
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
              alert(response.customButton);
            } else {
              this.setState({imagePath: response.uri});
            }
          });
    }

    render(){
        let {imagePath} = this.state;
        let {navigation} = this.props;
        
        const sliderStyle = {
            sliderDummy: {
                backgroundColor: 'lightgrey',
                width: 300,
                height:30,
                borderRadius: 50,
                position: 'absolute',                
            },
            sliderReal: {
                backgroundColor: GREENCOLOR,
                width: (this.state.slideValue/50) * 300,
                height:30,
            }
        }

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.cancelLabel}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.currentPage}>1/<Text style={{color: 'grey'}}>2</Text></Text>
                </View>
                <View style={styles.imageContainer}>
                    {imagePath == undefined && (
                         <Ionicons 
                            name="image" 
                            style={styles.imagePlaceholder} 
                            size={70}/>
                    )}
                    {imagePath != undefined && (
                        <Image source={{uri: imagePath}} style={styles.image}/>
                    )}
                    <TouchableOpacity onPress={this.pickImage}>
                        <Text style={styles.imageLabel}>Add Cover Photo</Text>
                    </TouchableOpacity>
                    <Text style={styles.sizeLabel}>(up to 12 Mb)</Text>
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Food Name</Text>
                    <TextInput style={styles.input} placeholder="Enter food name" />
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.inputDescription} placeholder="Tell a little about your food" />
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Cooking Duration <Text style={styles.tint}>(in minutes)</Text></Text>
                    <View style={styles.rangeRow}>
                        <Text style={styles.rangeLabel}>{'<'}10</Text>
                        <Text style={Object.assign({...styles.rangeLabel}, 
                            {marginLeft: 'auto'})}>30</Text>
                        <Text style={Object.assign({...styles.rangeLabel}, 
                            {marginLeft: 'auto', color: 'grey'})}>{'>'}60</Text>
                    </View>
                    <View style={{borderRadius: 50, overflow: 'hidden'}}>  
                        <View style={{flexDirection: 'row', position: 'absolute'}}>
                            <View style={sliderStyle.sliderDummy}></View>
                            <View style={sliderStyle.sliderReal}></View>
                        </View>
                        <Slider
                            style={{width: 300, height: 30, borderRadius: 50, transform: [{scale: 5}]}}
                            minimumValue={0}
                            maximumValue={50}
                            maximumTrackTintColor='transparent'  
                            minimumTrackTintColor='transparent'
                            value={this.state.slideValue}
                            onValueChange={(value)=> this.setState({ slideValue: value}) }
                        />
                    </View>
                    <TouchableOpacity 
                        style={styles.nextButton} 
                        onPress={() => navigation.navigate('SecondUpload')}>
                        <Text style={styles.buttonLabel}>Next</Text>
                    </TouchableOpacity>
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
    },
    imagePlaceholder: {
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
    },
    inputBox: {
        marginVertical: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    input: {
        borderColor: 'lightgrey',
        borderWidth: 1,
        height: 50,
        marginVertical: 15,
        borderRadius: 25,
        paddingHorizontal: 20
    },
    inputDescription: {
        paddingHorizontal: 10,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 15,
        textAlignVertical: 'top',
        height: 100
    },
    tint: {
        fontWeight: '100',
        fontSize: 18,
        color: 'lightgrey'
    },
    rangeLabel: {
        fontWeight: 'bold',
        fontSize: 16,
        color: GREENCOLOR,
    },
    rangeRow: {
        marginVertical: 20,
        flexDirection: 'row',
    },
    nextButton: {
        backgroundColor: GREENCOLOR,
        marginTop: 20,
        height: 57,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLabel: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
})