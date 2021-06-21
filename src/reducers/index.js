import users from './users';
import loggedUserId from './loggedUserId';
import { questions, questionsLoading } from './questions';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({   
    users,
    loggedUserId,
    questions,
    questionsLoading,
    loadingBar: loadingBarReducer,
})