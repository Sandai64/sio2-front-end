import axios from '../config/axios';

const getAllCategories = () => {
  return axios.get('/api/category/get/all').then((r) => r.data).catch((e) => e);
};

const getAllProductsFromCategoryID = (categoryID) => {
  return axios.get(`/api/category/get/products/${categoryID}`).then((r) => r.data).catch((e) => e);
};

const getCategoryByID = (categoryID) => {
  return axios.get(`/api/category/get/${categoryID}`).then((r) => r.data).catch(e => e.response.data);
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getAllCategories,
  getAllProductsFromCategoryID,
  getCategoryByID,
};
