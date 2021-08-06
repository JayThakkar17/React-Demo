import * as types from '../Constants/ActionTypes';

export const userLogin = (email, password) => {
  return {
    type: types.LOGIN_REQUEST,
    payload: {
      username: email,
      password,
    },
  };
};

export const userLoginSuccess = (response) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: response,
  };
};

export const userLoginFailure = (error) => {
  return {
    type: types.LOGIN_FAILURE,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT,
  };
};
