import { SET_LOGGED_USER_ID } from '../actions/loggedUserId';
export default function(state = null, action){
    switch(action.type){
        case SET_LOGGED_USER_ID:
            return action.id;
        default:
            return state;
    }
}