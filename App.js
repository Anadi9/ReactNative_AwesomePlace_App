/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import shortid from 'shortid';
import Appbar from './components/Appbar';
import PlaceInput from './components/PlaceInput';
import PlaceList from './components/PlaceList';


export default class Searchbar extends Component {

    state = {
        places: [],
    };


    placeAddedHandler = placeName => {
        this.setState(prevState => {
            return {
              places: prevState.places.concat({
                key: shortid.generate(),
                value: placeName,
              }),
            };
        });
    };
  
  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  };

    render() {
        return (
          <View style={styles.container}>
            <Appbar/>
            <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
          </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
