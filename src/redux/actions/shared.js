import { _getUsers, _getQuestions } from '../../utils/_DATA';

export const LOAD_DATA = 'LOAD_DATA';

const receiveInitialData = (users, questions) => {
  return {
    type: LOAD_DATA,
    users,
    questions,
  }
}

export const handleInitialData = () => async (dispatch) => {
  try {
    const users = await _getUsers();
    const questions = await _getQuestions();
    return dispatch(receiveInitialData(users, questions));
  } catch (error) {
    console.log(error);
  }
}