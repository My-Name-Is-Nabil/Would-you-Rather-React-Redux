export const SET_LOGGED_USER_ID = 'SET_LOGGED_USER_ID';
export const LOGOUT = 'LOGOUT';

function setLoggedUserId(id){
    return {
        type: SET_LOGGED_USER_ID,
        id,
    };
}

export function handleSetLoggedUserId(id){
    return function(dispatch){
        dispatch(setLoggedUserId(id));
    };
}

function logoutUser(){
    return {
        type: LOGOUT,
    };
}

export function handleLogoutUser(){
    return function(dispatch){
        dispatch(logoutUser());
    };
}