/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ListItem = (props) => (
        <TouchableOpacity onPress={props.onItemPressed}>
           <View style={styles.listItem}>
               <Text>{props.placeName}</Text>
           </View>
        </TouchableOpacity>
    );


const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#fff',
    },
});

export default ListItem;
