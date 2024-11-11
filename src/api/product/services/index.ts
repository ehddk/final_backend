import axios from "axios";
import ProductService from './product.service';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
});



export const productService = new ProductService(instance);

