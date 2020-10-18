/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem';

const TeamList = props => {
    return (
        <FlatList style={styles.listContainer} data={props.teams} renderItem={(info) => (
            <ListItem teamName={info.item.name} teamImg={info.item.image} onItemPressed={() => props.onItemSelected(info.item.key)} />
        )} />
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: '100%',
    },
});

export default TeamList;
