import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './_DATA.js';

export function getUsers(){
    return _getUsers();
}

export function getQuestions(){
    return _getQuestions();
}

export function saveQuestionAnswer({ loggedUserId, questionId, answer}){
    return _saveQuestionAnswer({loggedUserId, questionId, answer});
}

export function saveQuestion(question){
    return _saveQuestion(question);
}