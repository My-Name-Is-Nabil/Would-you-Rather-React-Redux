import { getUsers } from '../api/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const RECEIVE_USERS = 'RECEIVE_USERS';

function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    };
}

export function handleReceiveUsers(){
    return dispatch => {
        dispatch(showLoading());
        getUsers().then( users => dispatch(receiveUsers(users)) );
        dispatch(hideLoading());
    }
}