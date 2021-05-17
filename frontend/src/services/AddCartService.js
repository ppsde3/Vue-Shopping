import http from "../http-common";

class CartDataService {
  getAll() {
    return http.get("/cart");
  }

  create(data) {
    console.log(data);
    return http.post("/addCart", data);
  }

}
  
export default new CartDataService();
