import * as types from '../Constants/ActionTypes';

const initialState = {
  response: [],
  error: '',
  loading: false,
};

const deleteById = (state, id) => {
  const newData = state.response.filter((role) => {
    if (role.id !== id) {
      return true;
    }
    return false;
  });
  return newData;
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ROLE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload.response,
      };

    case types.GET_ROLE_FAILURE:
      return {
        ...state,
        loading: false,
        response: [],
        error: action.payload.error,
      };

    case types.ROLE_DELETE_SUCCESS:
      return {
        ...state,
        response: deleteById(state, action.id),
      };

    default:
      return state;
  }
};

export default roleReducer;
