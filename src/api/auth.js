import axios from 'axios';

export const registerUser = async (user) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:8000/authentication/register/',
    data: user,
  };
  const { data } = await axios.request(options);
  return data;
};

export const getUser = async (userId) => {
  const options = {
    method: 'GET',
    url: `http://localhost:8000/authentication/users/${userId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);
  return data;
};

export const loginUser = async (credentials) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:8000/authentication/login/',
    data: credentials,
  };

  const { data } = await axios.request(options);
  if (data.token) {
    window.sessionStorage.setItem('token', data.token);
  } else {
    window.sessionStorage.removeItem('token');
  }
  return data.message;
};


export const updateUser = async (userId, swipedGames) => {

  const options = {
    method: 'PATCH',
    url: `http://localhost:8000/authentication/users/${userId}`,
    data: { swipedGames },
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };
  const data = await axios.request(options);

  return data;
};