import * as a_types from '../actions/actionTypes';const initialState = {    personalCards: []}export const personalCardReducer = (state = initialState, action) => {    switch (action.type) {        case a_types.GET_ALL_PERSONAL_CARDS:            return {...state, personalCards: action.personalCards}        default:            return state    }}