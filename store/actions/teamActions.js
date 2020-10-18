/* eslint-disable prettier/prettier */
import { ADD_TEAM, SELECT_TEAM, DELETE_TEAM, DESELECT_TEAM } from './actionTypes';

export const addTeam = (teamName) => {
    return {
        type: ADD_TEAM,
        teamName: teamName,
        teamImg: teamName,
    };
};

export const deleteTeam = () => {
    return {
        type: DELETE_TEAM,
    };
};

export const selectTeam = (key) => {
    return {
        type: SELECT_TEAM,
        teamKey: key,
    };
};

export const deselectTeam = () => {
    return {
        type: DESELECT_TEAM,
    };
};
