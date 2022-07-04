import axios from "axios";

class BookService {
    baseUrl ="http://localhost:8088/book";

    addBook(data) {
        return axios.post(`${this.baseUrl}/create`, data);
      }
    
      getAllBooks() {
        return axios.get(`${this.baseUrl}/GetAll`);
      }
}
export default new BookService();

