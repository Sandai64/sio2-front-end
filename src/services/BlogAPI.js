import axios from '../config/axios';

const getAllBlogPosts = () => {
  return axios.get('/api/blog/get/posts/all').then((r) => r.data).catch((e) => e.response.data);
};

const getAllBlogCategories = () => {
  return axios.get(`/api/blog/get/categories/all`).then((r) => r.data).catch((e) => e.response.data);
};

const getBlogPostByID = (blogPostID) => {
  return axios.get(`/api/blog/get/post/${blogPostID}`).then((r) => r.data).catch(e => e.response.data);
};

const getBlogCategoryByID = (blogCategoryID) => {
  return axios.get(`/api/blog/get/category/${blogCategoryID}`).then((r) => r.data).catch(e => e.response.data);
};

const createBlogPost = (postTitle, postContent) => {
  return axios.post('/api/writer/create/post/', {postTitle, postContent})
}

const createBlogCategory = (categoryTitle) => {
  return axios.post('/api/writer/create/category/', {categoryTitle})
}

const deleteBlogCategory = (categoryID) => {
  return axios.post(`/api/writer/delete/category/${categoryID}`)
}

const deleteBlogPost = (postID) => {
  return axios.post(`/api/writer/delete/post/${postID}`)
}

const BlogAPI = {
  getAllBlogPosts,
  getAllBlogCategories,
  getBlogPostByID,
  getBlogCategoryByID,
  createBlogPost,
  createBlogCategory,
  deleteBlogCategory,
  deleteBlogPost
}

export default BlogAPI;
