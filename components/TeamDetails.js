/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native';

const TeamDetails = props => {

  let modalContent = null;

  if (props.selectedTeam) {
    modalContent = (
      <View style={styles.modalView}>
        <Text style={styles.teamName}>{props.selectedTeam.name}</Text>
        <Image source={props.selectedTeam.image} style={styles.img} resizeMode="contain" />
      </View>
    );
  }
  return (
    <Modal onRequestClose={props.onModalClosed} visible={props.selectedTeam !== null} animationType="slide">
    <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.btnView}>
          <Button style={styles.btn} title="delete" color="red" onPress={props.onItemDeleted} />
          <Button style={styles.btn} title="close" color="grey" onPress={props.onModalClosed} />
        </View>
    </View>
  </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#eee',
  },
  modalView: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img: {
    width: 180,
    height: 180,
  },
  teamName: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },
  btnView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn: {
    width: '50%',
  },
});

export default TeamDetails;
