import * as types from '../Constants/ActionTypes';

export const getRoleRequest = () => {
  return {
    type: types.GET_ROLE_REQUEST,
    payload: {
      loading: true,
    },
  };
};

export const getRoleSuccess = (response) => {
  return {
    type: types.GET_ROLE_SUCCESS,
    payload: {
      loading: false,
      response: response,
    },
  };
};

export const getRoleFailure = (error) => {
  return {
    type: types.GET_ROLE_FAILURE,
    error: error,
  };
};

export const deleteSuccess = (id) => {
  return {
    type: types.ROLE_DELETE_SUCCESS,
    id: id,
  };
};

export const updateRoleRequest = (id, roleName) => {
  return {
    type: types.ROLE_UPDATE_REQUEST,
    payload: {
      id: id,
      request: {
        roleName: roleName,
        permissions: [
          {
            module: 'category',
            permissions: {
              view: true,
              create: false,
              edit: false,
              delete: false,
            },
          },
        ],
        isSuperAdmin: false,
        roleStatus: false,
      },
    },
  };
};

export const addRoleRequest = (roleName) => {
  return {
    type: types.ROLE_ADD_SUCCESS,
    payload: {
      request: {
        roleName: roleName,
        permissions: [
          {
            module: 'category',
            permissions: {
              view: true,
              create: false,
              edit: false,
              delete: false,
            },
          },
        ],
        isSuperAdmin: false,
        roleStatus: false,
      },
    },
  };
};

export const deleteRoleRequest = (id) => {
  return {
    type: types.ROLE_DELETE_SUCCESS,
    payload: {
      id: id,
    },
  };
};

export const getRoleIDRequest = (id) => {
  return {
    type: types.GET_ROLE_ID_REQUEST,
    payload: id,
  };
};

export const getRoleIdSuccess = (roleByIdName) => {
  return {
    type: types.GET_ROLE_ID_SUCCESS,
    payload: roleByIdName,
  };
};
