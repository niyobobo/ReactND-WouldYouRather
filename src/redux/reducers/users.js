import { LOAD_DATA } from '../actions/shared';
import { CREATE_QUESTION, ANSWER_QUESTION } from '../actions/question';

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        ...action.users
      };
    case CREATE_QUESTION:
      const { author, id } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      };
    case ANSWER_QUESTION: {
      const { authedUser, qid, answer } = action.question;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    }
    default:
      return state;
  }
}