import * as Types from './../constants/ActionTypes';
import { findIndex } from 'lodash';

var initialState = [];

const comments = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_COMMENT:
            state = action.data
            return [...state];
        case Types.ADD_COMMENT_STORE:
            state.push(action.data)
            return [...state];
        default:
            return state;
    }


}
export default comments;