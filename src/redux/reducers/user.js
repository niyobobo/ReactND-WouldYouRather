import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  USER_LOGOUT
} from '../actions/auth';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
          id: action.id
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};