import http from "../http-common";

class ProductDataService {
  getAll() {
    return http.get("/");
  }

  create(data) {
    console.log(data);
    return http.post("/add", data);
  }

}
  
export default new ProductDataService();
