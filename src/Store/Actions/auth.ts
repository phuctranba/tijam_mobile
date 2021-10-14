import { AUTH } from "../types";

export function userLoginAction(username: String, password: String) {
  return {
    type: AUTH.LOGIN,
    username,
    password
  };
}

export function getCurrentUserInDBAction() {
  return {
    type: AUTH.GET_CURRENT_USER_IN_DB
  };
}

export function userLogoutAction(access_token: String) {
  return {
    type: AUTH.LOGOUT,
    access_token
  };
}

export function changePassword(access_token: String, oldPassword: String, newPassword: String) {
  return {
    type: AUTH.CHANGE_PASSWORD,
    access_token,
    oldPassword,
    newPassword
  };
}

export function resultChangePassword(result: String, error: String) {
  return {
    type: AUTH.RESULT_CHANGE_PASSWORD,
    result,
    error
  };
}
