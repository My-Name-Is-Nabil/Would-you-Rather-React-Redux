import users from './users';
import loggedUserId from './loggedUserId';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({   
    users,
    loggedUserId,
    loadingBar: loadingBarReducer,
})