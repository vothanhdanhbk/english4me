import * as Types from './../constants/ActionTypes';


var initialState =[];

const accounts = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_USERNAME:
            state = action.data;
            return [...state];
        default:
            return state;
    }


}
export default accounts;
