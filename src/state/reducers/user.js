import { USER_LOGGED_IN, USER_LOGGED_OUT } from '@/state/actions/user';

const user = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, isLoggedIn: true };
    case USER_LOGGED_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default user;
