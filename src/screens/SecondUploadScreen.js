import React, {Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { GREENCOLOR } from '../../assets/js/commonColors';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Divider from '../components/DividerComponent';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

export default class SecondUploadScreen extends Component{

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

        return (
            <View style={styles.container}>
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
                        <FontistoIcon name="nav-icon-grid-a" color="lightgrey" size={18}/>
                        <TextInput placeholder="Enter ingredient" style={styles.input}/>
                    </View>
                </View>
                <Divider/>
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
        marginVertical: 10,
        alignItems: 'center'
    },
    currentPage: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 'auto'
    },
    ingredientContainer: {
       
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
    }
})