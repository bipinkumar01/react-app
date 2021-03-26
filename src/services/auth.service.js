import axios from "axios";

//const API_URL = "http://localhost:1337/auth/local";

const API_URL = "http://3.14.149.115:1337/auth/local/";


class AuthService {
  login(username, password) {
    return axios
      .post(API_URL, { "identifier": username, "password": password })
      .then((response) => {
        if (response.data.jwt) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios
    .post(API_URL + "register", user);
  }
}

export default new AuthService();
