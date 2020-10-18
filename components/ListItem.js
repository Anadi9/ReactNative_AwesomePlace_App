/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ListItem = (props) => (
        <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image resizeMode="contain" source={props.teamImg} style={styles.teamImg} />
               <Text>{props.teamName}</Text>
           </View>
        </TouchableOpacity>
    );


const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    teamImg: {
        marginRight: 15,
        height: 50,
        width: 50,
    },
});

export default ListItem;
