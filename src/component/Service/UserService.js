import axios from "axios";

const id=localStorage.getItem('Authorization')
const userId = JSON.parse(id);

class UserService {
    baseUrl ="http://localhost:8088/user";

    addUser(data) {
        return axios.post(`${this.baseUrl}/register`, data);
      } 
      getAllBooks() {
        return axios.get(`${this.baseUrl}/getAll`);
      }
    userLogin(data) {
      return axios.post(`${this.baseUrl}/login`,data);
    }

}
export default new UserService();