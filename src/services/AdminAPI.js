import axios from '../config/axios';

const getAllUsers = () => {
  return axios.get('/api/admin/user/get/all').then((r) => r.data).catch((e) => e);
};

async function updateUserPassword(password) {
  return axios.post('/api/admin/self/password/update', {
    'new_password': password,
    'token': JSON.parse(localStorage.getItem('user')).token,
  })
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getAllUsers,
  updateUserPassword,
};
