import * as Types from './../constants/ActionTypes';


var initialState = [];

const english = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ENGLISH:
            state = action.data;
            // console.log(state[0].id)
            return [...state];
       
        default:
            return state;
    }


}
export default english;
