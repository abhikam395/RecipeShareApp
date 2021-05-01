import React, {Component} from 'react';
import { StyleSheet, View, Text, SectionList, Image, TouchableOpacity } from 'react-native';
import { GREENCOLOR } from '../../assets/js/commonColors';

const image = "https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=";

const sections = [
    {name: 'New', data: [
        {id: 1, user: {name: 'Dean Winchester', profile: image}, message: 'now following you', time: '1h'},
        {id: 2, user: {name: 'Dean Winchester', profile: image}, message: 'now following you', time: '1h'},
        {id: 3, user: {name: 'Dean Winchester', profile: image}, message: 'now following you', time: '1h'},
    ]},
    {name: 'Today', data: [
        {id: 1, user: {name: 'Dean Winchester', profile: image}, message: 'now following you', time: '1h'},
        {id: 2, user: {name: 'Dean Winchester', profile: image}, message: 'now following you', time: '1h'},
        {id: 3, user: {name: 'Dean Winchester', profile: image}, message: 'now following you', time: '1h'},
    ]},
    {name: 'Yesterday', data: [
        {id: 1, user: {name: 'Dean Winchester', profile: image}, message: 'now following you', time: '1h'},
        {id: 2, user: {name: 'Dean Winchester', profile: image}, message: 'now following you', time: '1h'},
        {id: 3, user: {name: 'Dean Winchester', profile: image}, message: 'now following you', time: '1h'},
    ]}
]


const Item = ({ item }) => {
    let {profile, name} = item.user;
    let {message, time} = item;
    return (
        <View style={styles.item}>
            <Image source={{uri: profile}} style={styles.userImage}/>
            <View style={{marginHorizontal: 10}}>
                <Text style={styles.userName}>{name}</Text>
                <View style={styles.row}>
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.dot} />
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
        </View>
      )
};

export default class NotificationScreen extends Component{

    constructor(){
        super();
    }

    render(){
        return (
            <SectionList
                style={styles.container}
                sections={sections}
                keyExtractor={(item, index) => 1 + index}
                renderItem={({item}) => <Item item={item} />}
                renderSectionHeader={({section: {name }}) => (
                    <Text style={styles.header}>{name}</Text>
                )}>

            </SectionList>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    },
    item: {
        marginVertical: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImage: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    message: {

    },
    dot: {
        height: 4,
        width: 4,
        backgroundColor: 'grey',
        borderRadius: 2,
        marginHorizontal: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    time: {
        fontSize: 12
    },
    button: {
        height: 40,
        width: 100,
        borderRadius: 20,
        backgroundColor: GREENCOLOR,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
    }
})