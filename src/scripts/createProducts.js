import dbPath from "../constans/path.js";
import fs from "node:fs/promises";
import { createFakeProduct } from "../utils/createFakeProduct.js";

export const createProducts = async (amount) => {
  const allProductsJson = await fs.readFile(dbPath, "utf-8");
  const allProducts = JSON.parse(allProductsJson);

  for (let i = 0; i < amount; i += 1) {
    const newProduct = createFakeProduct();
    allProducts.push(newProduct);
  }
  await fs.writeFile(dbPath, JSON.stringify(allProducts, null, 2));
};

createProducts(5);
