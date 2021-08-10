import {
    SET_USER_OBJ,
} from "./actionConstants";

export const setUserObject = (userObj) => ({
    type: SET_USER_OBJ,
    payload: {userObj}
});