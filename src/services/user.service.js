import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://3.14.149.115:1337/";
//const API_URL = "http://localhost:1337/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  userme() {
    return axios.get(API_URL + "users/me", { headers: authHeader() });
  }

  getUserBoard() {
    return axios.get(API_URL + "users/me", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "users/me", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "users/me", { headers: authHeader() });
  }

  saveMember(member) {
    return axios.post(API_URL + "people", member, { headers: authHeader() });
  }
  getMembers(userid) {
    let url = API_URL + "people?user=" + userid;
    return axios.get(url, { headers: authHeader() });
  }
  getMember(id) {
    let url = API_URL + "people/" + id;
    return axios.get(url, { headers: authHeader() });
  }
  updateMember(id, member) {
    console.log("member", member)
    console.log("id", id)
    let upurl = API_URL + "people/" + id;
    console.log("upurl", upurl)


    return axios.put(upurl, member, { headers: authHeader() });
  }
}

export default new UserService();
