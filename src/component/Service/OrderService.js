import axios from "axios";

const id=localStorage.getItem('Authorization')
const userId = JSON.parse(JSON.stringify(id));

class OrderService {
    baseUrl ="http://localhost:8088/order";

    addOrderedItems(data) {
        return axios.post(`${this.baseUrl}/insert`, data);
      }

      getUserById() {
        return axios.get(`${this.baseUrl}/getOrderById`, {params:{id}});
      }

      getAllOrder(){
        return axios.get(`${this.baseUrl}/getAllOrder`)
      }
}


export default new OrderService();
