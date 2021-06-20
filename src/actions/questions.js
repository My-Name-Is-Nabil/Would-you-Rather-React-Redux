import { getQuestions } from '../api/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

export function handleReceiveQuestions(){
    return function(dispatch){
        dispatch(showLoading());
        getQuestions().then( questions => {
            dispatch(receiveQuestions(questions));
        });
        dispatch(hideLoading());
    };
}