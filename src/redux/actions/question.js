import { _saveQuestion } from '../../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

export const CREATE_QUESTION = 'CREATE_QUESTION';

const createQuestion = (question) => {
  return {
    type: CREATE_QUESTION,
    question
  }
}

export const handleCreateQuestion = (question) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { user } = getState();
  try {
    const response = await _saveQuestion({
      ...question,
      author: user.id
    });
    dispatch(createQuestion(response));
    return dispatch(hideLoading());
  } catch (error) {
    return alert('Failed to create question');
  }
}