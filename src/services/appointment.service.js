import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://3.14.149.115:1337/";
//const API_URL = "http://localhost:1337/";

class AppointmentService {
 

  createAppointment(data){
    return axios.post(API_URL + "apointments", data, {headers: authHeader()}); 
  }
  getAppointments(user) {
    console.log("user=>",user);
    let url = API_URL + "apointments";
    let params = {}
    if(user.role.type === "authenticated"){
      params = { user:user.id }
    } else if(user.role.type === "doctor"){
      params = {doctor:user.id }
    } else if(user.role.type === "technisian"){
      params = { technician :user.id}
    }
    return axios.get(url, { headers: authHeader(), params: params });
  }
  getAPDetails(user, id) {
    console.log("user=>",user);
    let url = API_URL + "apointments/"+id;
    let params = {}
    if(user.role.type === "authenticated"){
      params = { user:user.id }
    } else if(user.role.type === "doctor"){
      params = {doctor:user.id }
    } else if(user.role.type === "technisian"){
      params = { technician :user.id}
    }
    return axios.get(url, { headers: authHeader(), params: params });
  }

  getVaccines() {
    
    let url = API_URL + "vaccineprices/";
  
    return axios.get(url);
  }

  generateVaccineApp(data) {
    //let url = 
    return axios.post(API_URL + "apointments", data, {headers: authHeader()}); 

  }
}

export default new AppointmentService();
