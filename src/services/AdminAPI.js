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

async function resetUserPassword(username) {
  return axios.get(`/api/admin/user/password/reset/${username}`)
}

async function deleteUser(username) {
  return axios.get(`/api/admin/user/delete/${username}`)
}

async function createUser(username, password, roles) {
  return axios.post('/api/admin/user/create', {
    username: username,
    password: password,
    roles: ['ROLE_WRITER']
    // roles: roles,
  })
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getAllUsers,
  updateUserPassword,
  resetUserPassword,
  deleteUser,
  createUser,
};
