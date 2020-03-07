import { LOAD_DATA } from '../actions/shared';

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        ...action.users
      }
      default:
        return state;
  }
}