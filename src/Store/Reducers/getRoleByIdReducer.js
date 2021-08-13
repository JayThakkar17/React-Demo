import * as types from '../Constants/ActionTypes';

const initialState = {
  roleNameId: ''
};

const getRoleByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ROLE_ID_SUCCESS:
      return {
        ...state,
        roleNameArray: action.payload,
      };
    default:
      return state;
  }
};

export default getRoleByIdReducer;
