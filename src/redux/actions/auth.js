export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

const userLogin = (id) => {
  return {
    type: LOGIN_SUCCESS,
    id
  }
}

const userLogout = () => {
  return {
    type: USER_LOGOUT,
  }
}

export const handleUserLogin = (id) => (dispatch) => {
  dispatch(loginRequest());
  try {
    return dispatch(userLogin(id));
  } catch (e) {
    return alert('Failed to login');
  }
};

export const handleUserLogout = () => (dispatch) => {
  try {
    return dispatch(userLogout());
  } catch (error) {
    return alert('Failed to logout');
  }
}