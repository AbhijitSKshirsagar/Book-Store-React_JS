import axios from "axios";

class BookService {
    baseUrl ="http://localhost:8088/cart";

    addBook(data) {
        return axios.post(`${this.baseUrl}/create`, data);
      }
    
      getAll() {
        return axios.get(`${this.baseUrl}/get`);
      }

    //   getBookById(Id) {
        // // return axios.get(`${this.baseUrl}/get_by_id/${Id}`);
    //   }
    //   deleteCartItem(cartId){
        // // return axios.delete(`${this.baseUrl}`+"/delete_cart/"+cartId)
    // }

    // updateCartQuantity(cartId,quantity){
        // // return axios.put(`${this.baseUrl}`+"/update_quantity/"+cartId+"/"+quantity);
    // }
    }
      export default new BookService();