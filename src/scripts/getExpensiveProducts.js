import dbPath from "../constans/path.js";
import fs from "node:fs/promises";

export const getExpensiveProducts = async () => {
  const PRICE = 500;
  try {
    const allProductsJson = await fs.readFile(dbPath, "utf-8");
    const allProducts = JSON.parse(allProductsJson);
    const expensiveProducts = allProducts.filter(
      (product) => product.price > PRICE
    );
    console.table(expensiveProducts);
  } catch (error) {
    console.log(error);
  }
};
getExpensiveProducts();
