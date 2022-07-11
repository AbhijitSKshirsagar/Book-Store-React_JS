import axios from "axios";

const id=localStorage.getItem('Authorization')
const userId = JSON.parse(JSON.stringify(id));

class CartService {
    baseUrl ="http://localhost:8088/cart";

    addCartItem(data) {
        return axios.post(`${this.baseUrl}/create`, data);
      }
    
      getAll() {
        return axios.get(`${this.baseUrl}/GetAllCartItems`);
      }

      getBookById(Id) {
        return axios.get(`${this.baseUrl}/get_by_id/${Id}`);
      }

      deleteCartItem(cartId){
         return axios.delete(`${this.baseUrl}`+"/delete_cart/"+cartId)
     }

    }
      export default new CartService();