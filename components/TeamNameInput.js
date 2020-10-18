/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

class TeamNameInput extends Component {
  state = {
    teamName: '',
  };

  teamNameChangedHandler = (val) => {
    this.setState({
      teamName: val,
    });
  };

  teamSubmitHandler = () => {
    if (this.state.teamName.trim() === '') {
      return;
    }

    this.props.onTeamAdded(this.state.teamName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome team"
          value={this.state.teamName}
          onChangeText={this.teamNameChangedHandler}
          style={styles.teamInput}
        />
        <Button
          title="Add"
          color="#000"
          style={styles.teamButton}
          onPress={this.teamSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  teamInput: {
    width: '70%',
  },
  teamButton: {
    width: '30%',
  },
});

export default TeamNameInput;
