import { getQuestions, saveQuestionAnswer } from '../api/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const START_RECEIVE_QUESTIONS = 'START_RECEIVE_QUESTIONS';
export const FINISH_RECEIVE_QUESTIONS = 'FINISH_RECEIVE_QUESTIONS';
export const UPDATE_QUESTION_ANSWER = 'UPDATE_QUESTION_ANSWER';

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

function updateQuestionAnswer(loggedUserId, questionId, answer){
    return {
        type: UPDATE_QUESTION_ANSWER,
        questionId,
        loggedUserId,
        answer,
    }
}

export function handleUpdateQuestionAnswer({ loggedUserId, questionId, answer }){
    return function(dispatch){
        dispatch(showLoading());
        return saveQuestionAnswer({ loggedUserId, questionId, answer }).then(()=>{
            dispatch(updateQuestionAnswer(loggedUserId, questionId, answer))
        }).then(() => {
            dispatch(hideLoading())
        });
    }
}

export function handleReceiveQuestions(){
    return function(dispatch){
        dispatch(showLoading());
        dispatch(startReceiveQuestions());
        getQuestions().then(questions => {
            dispatch(receiveQuestions(questions));
        }).then(() => {
            dispatch(finishReceiveQuestions());
            dispatch(hideLoading());
        });
    };
}

