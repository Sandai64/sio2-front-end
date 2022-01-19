import axios from '../config/axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router';

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
  localStorage.removeItem('user');
}

const authRegister = (username, password) => {
  return axios.post(customBaseURL + '/api/admin/user/create', {username, password});
}

const authIsAuthenticated = async () => {
  const authResult = await axios.get('https://localhost:8000/api/auth/jwt/test')
  .then((r) => r.status)
  .catch((e) => e.response.status);

  if (authResult === 200) {
    return true
  }

  return false;
}

const authGTFO = () => {
  authLogout();
  window.location.pathname = "/admin";
}

/**
 * @returns boolean|Object
 * Returns false if the token couldn't be found or decoded properly.
 */
const getDecodedLocalToken = () => {
  const user = localStorage.getItem('user');

  if (user) {
    const token = jwtDecode(JSON.parse(user).token);
    return token;
  }

  return false;
}

const AuthAPI = {
  authLogin,
  authLogout,
  authRegister,
  authIsAuthenticated,
  getDecodedLocalToken,
  authGTFO
}

export default AuthAPI;