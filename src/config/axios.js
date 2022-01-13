import axios from 'axios';
import jwtDecode from 'jwt-decode';

// FIXME doesn't work for POST & PUT requests
const instance = axios.create({
  baseURL: 'https://localhost:8000/',
});

instance.interceptors.request.use((config) => {
  const user = localStorage.getItem('user');
  console.log(JSON.parse(user).token);
  if (user) {
    const token = jwtDecode(JSON.parse(user).token);
    console.log(token);
    if (token['exp'] * 1000 < Date.now()) {
      localStorage.removeItem('token'); // Expired token
    } else {
      config.headers.Authorization = 'Bearer ' + token; // Valid token
    }
  }

  return config;
})

export default instance;