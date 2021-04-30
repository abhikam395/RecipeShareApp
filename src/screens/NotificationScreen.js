import React, {Component} from 'react';
import { StyleSheet, View, Text, SectionList, Image } from 'react-native';

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
        padding: 20
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    item: {
        marginVertical: 30,
        flex: 1,
        flexDirection: 'row'
    },
    userImage: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
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
    }
})