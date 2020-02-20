import { _getUsers } from '../../utils/_DATA';

export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const handleReceiveUsers = () => async (dispatch) => {
  try {
    const users = await _getUsers();
    return dispatch(receiveUsers(users));
  } catch (error) {
    console.log(error);
  }
}