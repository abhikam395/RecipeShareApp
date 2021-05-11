import React, {Component, Fragment } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera} from 'react-native-image-picker';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Divider from '../components/DividerComponent';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { GREENCOLOR } from '../../assets/js/commonColors';
import UploadSuccessComponent from '../components/UploadSuccessComponent';

export default class SecondUploadScreen extends Component{

    constructor(){
        super();
        this.state = {
            imagePath: null,
            slideValue: 0,
            uploaded: false
        }
        this.upload = this.upload.bind(this);
        this.launchCamera = this.launchCamera.bind(this);
    }

    launchCamera(){
        let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          launchCamera(options, (response) => {
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

    upload(){
        this.setState({uploaded: true})
    }

    render(){
        let {navigation} = this.props;
        let {uploaded} = this.state;

        return (
            <Fragment>
               {uploaded && <UploadSuccessComponent  {...this.props}/>}
                <ScrollView style={styles.container}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.cancelLabel}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={styles.currentPage}>2/<Text style={{color: 'grey'}}>2</Text></Text>
                    </View>
                    <View style={styles.ingredientContainer}>
                        <View style={styles.row}>
                            <Text style={styles.subtitle}>Ingredients</Text>
                            <TouchableOpacity style={styles.groupBox}>
                                <AntDesignIcon name="plus" style={styles.plusIcon}/>
                                <Text style={styles.groupLabel}>Group</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <FontistoIcon name="nav-icon-grid-a" color="grey" size={16}/>
                            <TextInput placeholder="Enter ingredient" style={styles.input}/>
                        </View>
                        <View style={styles.row}>
                            <FontistoIcon name="nav-icon-grid-a" color="grey" size={16}/>
                            <TextInput placeholder="Enter ingredient" style={styles.input}/>
                        </View>
                        <TouchableOpacity style={styles.ingredientButton}>
                            <AntDesignIcon name="plus" style={styles.plusIcon}/>
                            <Text style={styles.ingredientButtonLabel}>Ingredient</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider/>
                    <View style={styles.stepContainer}>
                        <Text style={styles.subtitle}>Steps</Text>
                        <View style={styles.row}>
                            <View style={styles.firstStepLeft}>
                                <View style={styles.round}>
                                    <Text style={styles.roundLabel}>1</Text>
                                </View>
                                <FontistoIcon 
                                    name="nav-icon-grid-a" 
                                    color="grey" 
                                    size={16} 
                                    style={styles.grid}/>
                            </View>
                            <View style={styles.firstStepRight}>
                                <TextInput 
                                    style={styles.stepInput}
                                    placeholder="Tell a little about your food"/>
                                <TouchableOpacity 
                                    style={styles.cameraButton} 
                                    onPress={this.launchCamera}>
                                        <Ionicons name="camera" size={28} color="darkblue"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity 
                                style={styles.backButton} 
                                onPress={() => navigation.goBack()}>
                                    <Text style={styles.backButtonLabel}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.nextButton} 
                                onPress={this.upload}>
                                    <Text style={styles.nextButtonLabel}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    cancelLabel: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18,
    },
    row: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },
    currentPage: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 'auto'
    },
    ingredientContainer: {
       paddingVertical: 20
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    plusIcon: {
        fontSize: 18,
    },
    groupBox: {
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
    },
    groupLabel: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'lightgrey',
        flex: 1,
        borderRadius: 25,
        height: 50,
        marginLeft: 15,
    },
    ingredientButton: {
        height: 56,
        flexDirection: 'row',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40
    },
    ingredientButtonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    stepContainer: {
        paddingVertical: 20
    },
    firstStepLeft: {
        alignItems: 'center',
        height: '100%',
        paddingVertical: 20
    },
    firstStepRight: {
        flex: 1,
        paddingVertical: 20
    },
    round: {
        backgroundColor: 'darkblue',
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    roundLabel: {
        color: 'white'
    },
    grid: {
        marginTop: 20
    },
    stepInput: {
        borderColor: 'lightgrey',
        height: 150,
        borderWidth: 1,
        marginLeft: 10,
        borderRadius: 10,
        textAlignVertical: 'top',
        padding: 20
    },
    cameraButton: {
        height: 50,
        backgroundColor: '#eceff1',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    backButton: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eceff1',
        borderRadius: 25,
    },
    backButtonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'darkblue',
    },
    nextButton: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GREENCOLOR,
        borderRadius: 25,
        marginLeft: 20
    },
    nextButtonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
})