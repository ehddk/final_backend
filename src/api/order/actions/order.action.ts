"use server";

import { orderService } from "../services";

async function createOrder(req: createOrderRequest) {
  const data = await orderService.createOrder(req);
  return data;
}

async function updateOrder(req: updateOrderRequest) {
  const data = await orderService.updateOrder(req);
  return data;
}

async function deleteOrder(req: deleteOrderRequest) {
  const data = await orderService.deleteOrder(req);
  return data;
}

export { createOrder, updateOrder, deleteOrder };
