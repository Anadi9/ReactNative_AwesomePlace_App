/* eslint-disable prettier/prettier */
import { createStore, combineReducers } from 'redux';

import teamsReducer from './reducres/teams'; 

const rootRuducer = combineReducers({
    teams: teamsReducer,
});

const configStore = () => {
    return createStore(rootRuducer);
};

export default configStore;
