import dbPath from "../constans/path.js";
import fs from "node:fs/promises";

export const totalPrice = async () => {
  try {
    const getAllProductsJson = await fs.readFile(dbPath, "utf-8");
    const getAllProducts = JSON.parse(getAllProductsJson);
    const sumProducts = getAllProducts.reduce((total, product) => {
      return total + Number(product.price);
    }, 0);
    console.log(sumProducts);
  } catch (error) {
    console.log(error);
  }
};
totalPrice();
