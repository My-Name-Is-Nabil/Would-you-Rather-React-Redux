import { RECEIVE_USERS } from '../actions/users';
import { UPDATE_QUESTION_ANSWER} from '../actions/questions';

export default function users(state = {}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
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
        default:
            return state;
    }
}