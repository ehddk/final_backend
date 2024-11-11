import axios from "axios";
import { OrderService } from "./order.service";

const instance = axios.create({})
export const orderService = new OrderService(
    instance
)