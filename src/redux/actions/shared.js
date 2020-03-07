import { _getUsers, _getQuestions } from '../../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading'

export const LOAD_DATA = 'LOAD_DATA';

const receiveInitialData = (users, questions) => {
  return {
    type: LOAD_DATA,
    users,
    questions,
  }
}

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