import { RECEIVE_USERS } from '../actions/users';
import { UPDATE_QUESTION_ANSWER, ADD_QUESTION } from '../actions/questions';

export default function users(state = {}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...action.users,
                ...state,
            }
        case UPDATE_QUESTION_ANSWER:
            return {
                ...state,
                [action.loggedUserId]: {
                    ...state[action.loggedUserId],
                    answers: {
                        ...state[action.loggedUserId].answers,
                        [action.questionId]: action.answer,
                    }
                }
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            };
        default:
            return state;
    }
}