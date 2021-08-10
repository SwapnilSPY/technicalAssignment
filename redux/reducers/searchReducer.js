import {
    SET_USER_OBJ
} from '../actions/actionConstants';

const initialState = {
    userObj: {}
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_OBJ:
            return { ...state, userObj: action.payload.userObj }
        default:
            return state;
    }
}

export default searchReducer;