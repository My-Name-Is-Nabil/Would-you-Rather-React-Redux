import { getQuestions } from '../api/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const START_RECEIVE_QUESTIONS = 'START_RECEIVE_QUESTIONS';
export const FINISH_RECEIVE_QUESTIONS = 'FINISH_RECEIVE_QUESTIONS';

function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

function startReceiveQuestions(){
    return {
        type: START_RECEIVE_QUESTIONS,
    };
}

function finishReceiveQuestions(){
    return {
        type: FINISH_RECEIVE_QUESTIONS,
    };
}

export function handleReceiveQuestions(){
    return function(dispatch){
        dispatch(showLoading());
        dispatch(startReceiveQuestions());
        getQuestions().then(questions => {
            dispatch(receiveQuestions(questions));
            dispatch(finishReceiveQuestions());
            dispatch(hideLoading());
        });
    };
}