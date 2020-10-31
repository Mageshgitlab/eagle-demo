import axios from "axios";

export default class ProductService {
  getProductsSmall() {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data);
  }

  getProducts(skip, take) {
    return axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_start=${skip}&_limit=${take}`
      )
      .then((res) => res.data);
  }

  getProductsWithOrdersSmall() {
    return axios
      .get("showcase/demo/data/products-orders-small.json")
      .then((res) => res.data.data);
  }
  getContracts() {
    return axios
      .get("https://localhost:44380/api/Contracts")
      .then((res) => res.data);
  }
}
