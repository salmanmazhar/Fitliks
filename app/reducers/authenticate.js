import * as types from '../actions/actionTypes';

const initialState = {
    isUserLoggedIn: false
};

export default function authenticate(state = initialState, action = {}) {
  switch (action.type) {
    case types.FACEBOOK_LOGIN:
      return {
        ...state,
        isUserLoggedIn: true
      };
    case types.GMAIL_LOGIN:
      return {
        ...state,
        isUserLoggedIn: true
      };
    default:
      return state;
  }
}
