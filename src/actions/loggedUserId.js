export const SET_LOGGED_USER_ID = 'SET_LOGGED_USER_ID';

export function setLoggedUserId(id){
    return {
        type: SET_LOGGED_USER_ID,
        id,
    };
}
