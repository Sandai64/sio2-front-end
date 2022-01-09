import axios from '../config/axios';

const getAllProducts = () => {
  return axios.get('/api/product/get/all').then((r) => r.data).catch((e) => e);
};

const getProductByID = (productID) => {
  return axios.get(`/api/product/get/${productID}`).then((r) => r.data).catch(e => e.response.data);
};

export default {
  getAllProducts,
  getProductByID,
};
