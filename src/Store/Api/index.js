import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export const getLoginAPI = (action) => {
  return axios
    .post(`${BASE_URL}/auth/login`, action)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
