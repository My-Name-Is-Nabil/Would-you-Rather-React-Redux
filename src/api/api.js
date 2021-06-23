import { _getUsers, _getQuestions, _saveQuestionAnswer } from './_DATA.js';

export function getUsers(){
    return _getUsers();
}

export function getQuestions(){
    return _getQuestions();
}

export function saveQuestionAnswer({ loggedUserId, questionId, answer}){
    return _saveQuestionAnswer({loggedUserId, questionId, answer});
}
