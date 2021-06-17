import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const SET_LOGGED_USER_ID = 'SET_LOGGED_USER_ID';

function setLoggedUserId(id){
    return {
        type: SET_LOGGED_USER_ID,
        id,
    };
}

export function handleSetLoggedUserId(id){
    return function(dispatch){
        dispatch(showLoading());
        dispatch(setLoggedUserId(id));
        dispatch(hideLoading());
    }
}
