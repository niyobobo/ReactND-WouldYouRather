import { LOAD_DATA } from "../actions/shared";
import { CREATE_QUESTION, ANSWER_QUESTION } from '../actions/question';

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
    case ANSWER_QUESTION:
      const { question: { qid, answer, authedUser }} = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: !action.fail
                ? state[qid][answer].votes.concat([authedUser])
                : state[qid][answer].votes.filter(user => user !== authedUser)
          }
        }
      };
    default:
      return state;
  }
}