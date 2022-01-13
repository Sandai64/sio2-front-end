class AuthService {
  login(username, password) {
    return axios
      .post('/login_check', { username, password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(username, password) {
    return axios.post('/admin/user/create', {username, password});
  }
}

export default { AuthService };