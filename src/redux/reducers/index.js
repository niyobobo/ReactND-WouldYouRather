import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading'
import user from './user';
import users from './users';
import questions from './questions';

export default combineReducers({
  user,
  users,
  questions,
  loadingBar: loadingBarReducer
});