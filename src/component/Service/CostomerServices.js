import axios from "axios";

const id = localStorage.getItem('CusomerId')
console.log(id)

class CustomerServices {
  baseUrl = "http://localhost:8088/customer";

  addperson(data) {
    return axios.post(`${this.baseUrl}/add`, data);
  }

  getUserById() {
    return axios.get(`${this.baseUrl}/get/${id}`);
  }

}
 
export default new CustomerServices();