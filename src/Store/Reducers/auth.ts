import { AUTH } from "../types";
import { createReducer } from "../../Utils/Helpers";

const initialState = {
  isLogged: false,
  isLoadding: true,
  isError: false,
  access_token: undefined,
  access_token_stringee: undefined,
  access_token_mbaas: undefined,
  type_account: undefined,
  username: undefined,
  password: undefined,
  error: undefined,
  name: undefined,
  avatarId: undefined,
  changing_password: false,
  result_change_password: "wait",
  error_change_password: "",
  unit: undefined
};

const actionHander = {
  [AUTH.LOGIN]: (state = initialState, action:any) => {
    return {
      ...state,
      username: action.username,
      password: action.password,
      isLoadding: true,
      isError: false,
      error: ""
    };
  },
  [AUTH.LOGIN_SUCCESS]: (state = initialState, action: any) => {
    return { isLogged: false, access_token: action.access_token, username: action.username, error: "", password: "" };
  },
  [AUTH.LOGIN_FAILED]: (state = initialState, action: any) => {
    return { ...state, isLogged: false, error: action.error, isError: true, isLoadding: false };
  },

  [AUTH.LOGOUT]: (state = initialState, action: any) => {
    return {
      ...state,
      isLogged: false,
      isLoadding: true,
      isError: false,
      access_token: undefined,
      access_token_stringee: undefined,
      access_token_mbaas: undefined,
      type_account: 0,
      username: undefined,
      password: undefined,
      error: undefined,
      avatarId: undefined,
      changing_password: false,
      result_change_password: "wait",
      error_change_password: "",
      unit: undefined
    };
  },
  [AUTH.LOGOUT_SUCCESS]: (state = initialState) => {
    return { ...state, isLoadding: false };
  },
  [AUTH.LOGOUT_FAILED]: (state = initialState, action:any) => {
    return { ...state, error: action.error, isLoadding: false };
  }

  // [AUTH.GET_CURRENT_IN_DB]: (state = initialState) => {
  //     return {...state, isLoadding: true};
  // },
  // [GET_CURRENT_IN_DB_SUCCESS]: (state = initialState, action) => {
  //     return {
  //         ...state,
  //         isLogged: false,
  //         username: action.username,
  //         access_token: action.access_token,
  //         unit:action.unit,
  //         access_token_mbaas:action.access_token_mbaas,
  //         type_account:action.type_account
  //     };
  // },
  // [GET_CURRENT_IN_DB_FAILED]: (state = initialState) => {
  //     return {...state, isLogged: false, isLoadding: false};
  // },
  // [AUTH.CHECK_ACCESS_TOKEN_IS_ACTIVE]: (state = initialState) => {
  //     return {...state, isLoadding: true};
  // },
  // [CHECK_ACCESS_TOKEN_IS_ACTIVE_SUCCESS]: (state = initialState, action) => {
  //     console.log(action);
  //     return {
  //         ...state,
  //         username: action.username,
  //         isLogged: true,
  //         avatarId: action.avatarId,
  //         isLoadding: false,
  //         isError: false,
  //         access_token_stringee: action.access_token_stringee,
  //         access_token_mbaas: action.access_token_mbaas,
  //         unit: action.unit,
  //         type_account: action.type_account
  //     };
  // },
  // [CHECK_ACCESS_TOKEN_IS_ACTIVE_FAILED]: (state = initialState, action) => {
  //     return {...state, isLogged: false, isLoadding: false, isError: true, error: action.error};
  // },
  //
  // [AUTH.UPDATE_AVATAR]: (state = initialState, action) => {
  //     return {...state, avatarId: action.avatarId};
  // },
  //
  //
  // // Thay đổi mật khẩu
  // [AUTH.CHANGE_PASSWORD]: (state = initialState, action) => {
  //     return {
  //         ...state,
  //         changing_password: true
  //     };
  // },
  //
  // [AUTH.RESULT_CHANGE_PASSWORD]: (state = initialState, action) => {
  //
  //     let error="";
  //     if(action.result==='fail'){
  //         error=action.error;
  //     }
  //
  //     return {
  //         ...state,
  //         changing_password: false,
  //         result_change_password: action.result,
  //         error_change_password:error
  //     };
  // },
};

export default createReducer(initialState, actionHander);
