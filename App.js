/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Appbar from './components/Appbar';
import TeamNameInput from './components/TeamNameInput';
import TeamList from './components/TeamList';
import TeamDetails from './components/TeamDetails';
import { connect } from 'react-redux';
import { addTeam, deleteTeam, selectTeam, deselectTeam } from './store/actions/index';


class App extends Component {

    teamAddedHandler = teamName => {
      this.props.onAddTeam(teamName);
    };
  
    teamDeletedHandler = () => {
      this.props.onDeleteTeam();
    };
  
    modalClosedHandler = () => {
      this.props.onDeselectTeam();
    };
  
  teamSelectedHandler = key => {
    this.props.onSelectTeam(key);
  };

    render() {
        return (
          <View style={styles.container}>
            <Appbar />
            <TeamNameInput onTeamAdded={this.teamAddedHandler} />
            <TeamList teams={this.props.teams} onItemSelected={this.teamSelectedHandler} />
            <TeamDetails selectedTeam={this.props.selectedTeam} onTeamDeleted={this.teamDeletedHandler} onModalClosed={this.modalClosedHandler} />
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


const mapStateToProps = state => {
  return {
    teams: state.teams.teams,
    selectedTeam: state.teams.selectedTeam,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTeam: (name) => dispatch(addTeam(name)),
    onDeleteTeam: () => dispatch(deleteTeam()),
    onSelectTeam: (key) => dispatch(selectTeam(key)),
    onDeselectTeam: () => dispatch(deselectTeam()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
