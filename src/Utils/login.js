export const authToken = () => {
  return localStorage.getItem('accessToken');
};

export const setName = (firstName) => {
  return localStorage.setItem('firstName', firstName);
};

export const getName = () => {
  return localStorage.getItem('firstName');
};

export const isLoggedIn = () => {
  if (authToken()) {
    return true;
  } else {
    return false;
  }
};

export const storeToken = async (token) => {
  try {
    await localStorage.setItem('accessToken', token);
  } catch (err) {
    console.log('LocalStorage Error', err);
  }
};

export const logout = () => {
  localStorage.removeItem('accessToken');
};
