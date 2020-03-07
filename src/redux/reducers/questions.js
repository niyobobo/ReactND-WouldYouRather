import { LOAD_DATA } from "../actions/shared";
import { CREATE_QUESTION } from '../actions/question';

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        ...action.questions
      };
    case CREATE_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question
      };
    default:
      return state;
  }
}