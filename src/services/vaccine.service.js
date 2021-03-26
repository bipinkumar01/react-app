import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://3.14.149.115:1337/";
//const API_URL = "http://localhost:1337/";

class VaccineService {
  

  getVaccines() {
    let url = API_URL + "vaccines";
    return axios.get(url);
  }
}

export default new VaccineService();
