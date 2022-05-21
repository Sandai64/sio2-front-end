import axios from 'axios';
import jwtDecode from 'jwt-decode';

// FIXME doesn't work for POST & PUT requests
const instance = axios.create({
  baseURL: 'https://localhost:8000/',
});

instance.interceptors.request.use((config) => {
  const user = localStorage.getItem('user');

  if (user) {
    const token = jwtDecode(JSON.parse(user).token);

    if (token['exp'] * 1000 < Date.now()) {
      localStorage.removeItem('user'); // Expired token
      config.headers.Authorization = '';
    } else {
      config.headers["Authorization"] = 'Bearer ' + JSON.parse(user).token; // Valid token
    }
  }

  return config;
});

export default instance;