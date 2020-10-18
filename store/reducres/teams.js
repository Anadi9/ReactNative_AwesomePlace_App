/* eslint-disable prettier/prettier */
import shortid from 'shortid';
import { ADD_TEAM, DELETE_TEAM, DESELECT_TEAM, SELECT_TEAM } from './../actions/actionTypes';

const initialState = {
    teams: [],
    selectedTeam: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEAM:
            return {
                ...state,
                teams: state.teams.concat({
                key: shortid.generate(),
                name: action.teamName,
                image: {
                    uri: "https://upload.wikimedia.org/wikipedia/en/a/ac/The_new_crest_of_India_national_football_teams.png"
                },
              }),
            };
        
        case DELETE_TEAM:
            return {
                ...state,
                teams: state.teams.filter(team => {
                    return team.key !== state.selectedTeam.key;
                  }),
                selectedTeam: null,
            };
        
        case SELECT_TEAM:
            return {
                ...state,
                selectedTeam: state.teams.find(team => {
                    return team.key === action.placeKey;
                })
            };
            
        case DESELECT_TEAM:
            return {
                ...state,
                selectedTeam: null,
            };
        
        default:
            return state;
    }
};

export default reducer;
