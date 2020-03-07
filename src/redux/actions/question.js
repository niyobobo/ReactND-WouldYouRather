import { _saveQuestion, _saveQuestionAnswer } from '../../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

export const CREATE_QUESTION = 'CREATE_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

const createQuestion = (question) => {
  return {
    type: CREATE_QUESTION,
    question
  }
}

const answerQuestion = (question) => {
  return {
    type: ANSWER_QUESTION,
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

export const handleAnswerQuestion = (data)=> async (dispatch, getState)=>{
  const { user } = getState();
  const payload = {
    ...data,
    authedUser: user.id
  }
  try {
    dispatch(answerQuestion(payload));
    await _saveQuestionAnswer(payload);
  } catch (error) {
    dispatch(answerQuestion({...payload, fail: true }));
    return alert('Failed to answer the question');
  }
}