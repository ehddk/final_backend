"use server";

import { productService } from "../services";

async function createProduct(req: createProductRequest) {
  const data = await productService.createProduct(req);
  return data;
}

async function updateProduct(req: updateProductRequest) {
  const data = await productService.updateProduct(req);
  return data;
}

async function deleteProduct(req: deleteProductRequest) {
  const data = await productService.deleteProduct(req);
  return data;
}

export { createProduct, updateProduct, deleteProduct };