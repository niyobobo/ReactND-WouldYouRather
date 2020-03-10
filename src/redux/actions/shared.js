import { _getUsers, _getQuestions } from '../../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading'

export const LOAD_DATA = 'LOAD_DATA';

/**
 * @description action to dispatch when initial data loaded
 * @param { Object } users  all users
 * @param { Object } questions  all questions
 * @returns { Object } action type to be handled by reducer
 */
const receiveInitialData = (users, questions) => {
  return {
    type: LOAD_DATA,
    users,
    questions,
  }
}

/**
 * @description Load initial data (users and questions ) when application starts
 * @returns { Function } dispatching the action to the reducer
 */
export const handleInitialData = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const users = await _getUsers();
    const questions = await _getQuestions();
    dispatch(receiveInitialData(users, questions));
    return dispatch(hideLoading());
  } catch (error) {
    return alert(error);
  }
}