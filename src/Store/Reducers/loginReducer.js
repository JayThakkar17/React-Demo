import * as types from '../Constants/ActionTypes';

const initialState = {
  response: [],
  error: '',
  loading: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        response: action.payload,
        error: '',
        loading: false,
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        response: [],
      };

    default:
      return state;
  }
};

export default loginReducer;
