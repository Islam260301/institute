import * as a_types from '../actions/actionTypes';const initialState = {    directions: []}export const directionReducer = (state = initialState, action) => {    if (action.type === a_types.GET_ALL_DIRECTIONS) {        return {...state, directions: action.directions}    } else {        return {...state}    }}