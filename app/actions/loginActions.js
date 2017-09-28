import * as types from './actionTypes';

export function facebookLogin() {
  return {
    type: types.FACEBOOK_LOGIN
  };
}

export function gmailLogin() {
  return {
    type: types.GMAIL_LOGIN,
  };
}
