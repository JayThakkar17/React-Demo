import axios from 'axios';
import { authToken } from '../../Utils/login';

const BASE_URL = 'http://localhost:4000';
const token = authToken();

export const getRoleAPI = () => {
  return axios
    .get(`${BASE_URL}/roles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const updateRoleAPI = (payload) => {
  return axios
    .patch(`${BASE_URL}/roles/${payload.id.id}`, payload.request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const addRoleAPI = (payload) => {
  return axios
    .post(`${BASE_URL}/roles`, payload.request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteRoleAPI = async (payload) => {
  const res = await axios.delete(`${BASE_URL}/roles/${payload}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getRoleIdAPI = (payload) => {
  // console.log('PAYLOAD', payload);
  return axios
    .get(`${BASE_URL}/roles/${payload}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      // console.log(err);
      return err;
    });
};
