const initialState = {    directions: []}export const directionReducer = (state = initialState, action) => {    if (action.type === 'GET_ALL_DIRECTIONS') {        return {...state, directions: action.directions}    } else {        return {...state}    }}