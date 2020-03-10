import { _saveQuestion, _saveQuestionAnswer } from '../../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

export const CREATE_QUESTION = 'CREATE_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

/**
 * @description create question action to dispatched to the reducer
 * @param {Object} question response data from create question action-creator
 * @returns { Object } action type and payload to be handled by reducer
 */
const createQuestion = (question) => {
  return {
    type: CREATE_QUESTION,
    question
  }
}

/**
 * @description answer question action to dispatched to the reducer
 * @param {Object} question response data from answer question action-creator
 * @returns { Object } action type and payload to be handled by reducer
 */
const answerQuestion = (question) => {
  return {
    type: ANSWER_QUESTION,
    question
  }
}

/**
 * @description action creator for creating a new question
 * @param { Object } question payload data of created question
 * @returns { Function } dispatching the action to the reducer
 */
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

/**
 * @description action creator for answer a question
 * @param { Object } data payload data of answered question and selected option
 * @returns { Function } dispatching the action to the reducer
 */
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