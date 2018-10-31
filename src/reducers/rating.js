import * as Types from './../constants/ActionTypes';


var initialState =[];

const ratings = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_RATING:
            state = action.data;
            return [...state];
        default:
            return state;
    }


}
export default ratings;
