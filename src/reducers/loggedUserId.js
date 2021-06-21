import { SET_LOGGED_USER_ID, LOGOUT } from '../actions/loggedUserId';

export default function loggedUserId(state = null, action){
    switch(action.type){
        case SET_LOGGED_USER_ID:
            return action.id;
        case LOGOUT:
            return null;
        default:
            return state;
    }
}