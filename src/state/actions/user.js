export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export const userLoggedIn = () => ({
  type: USER_LOGGED_IN,
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

// ASYNC EXAMPLE
// export const incrementAsync = (delay = 1000) => dispatch => {
//   setTimeout(() => {
//     dispatch(increment());
//   }, delay);
// };
