export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';

/**
 * @description action to dispatch when a user sends login request
 * @returns { Object } action type to be handled by reducer
 */
const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

/**
 * @description action to dispatch to reducer when user log in
 * @param { String }
 * @returns { Object } action type and user data to be handled by reducer
 */
const userLogin = (id) => {
  return {
    type: LOGIN_SUCCESS,
    id
  }
}

/**
 * @description action to dispatch to reducer when user logout
 * @returns { Object } action type to be handled by reducer
 */
const userLogout = () => {
  return {
    type: USER_LOGOUT,
  }
}

/**
 * @description Allow user to impersonate by logging in
 * @param { String } id  identity of user who is logging ig
 * @returns { Function } dispatching the action to the reducer
 */
export const handleUserLogin = (id) => (dispatch) => {
  dispatch(loginRequest());
  try {
    return dispatch(userLogin(id));
  } catch (e) {
    return alert('Failed to login');
  }
};

/**
 * @description Allow user to logout
 * @returns { Function } dispatching the action to the reducer
 */
export const handleUserLogout = () => (dispatch) => {
  try {
    return dispatch(userLogout());
  } catch (error) {
    return alert('Failed to logout');
  }
}