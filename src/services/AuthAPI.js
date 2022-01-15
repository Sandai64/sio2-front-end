import axios from 'axios';

// HACK workaround axios not getting default baseURL for POST & PUT requests
const customBaseURL = 'https://localhost:8000'

const authLogin = (username, password) => {
  return axios
    .post(customBaseURL + '/api/login_check', { username, password })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
  })
  .catch((e) => e.response.data);
}

const authLogout = () => {
  localStorage.removeItem('token');
}

const authregister = (username, password) => {
  return axios.post(customBaseURL + '/api/admin/user/create', {username, password});
}

const authIsAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (token) {
    // TODO handle token lifecycle
  }
}


export default {
  authLogin,
  authLogout,
  authregister,
  authIsAuthenticated
};