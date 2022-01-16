import axios from '../config/axios';

const getAllUsers = () => {
  return axios.get('/api/admin/user/get/all').then((r) => r.data).catch((e) => e);
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getAllUsers,
};
