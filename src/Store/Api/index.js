import axios from 'axios';

export const getLoginAPI = (action) => {
  return axios
    .post('http://localhost:4000/auth/login', action)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
