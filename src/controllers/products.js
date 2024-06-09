import { getAllProducts } from "../services/products.js"

export const getProductsController = async (req, res, next) => {
  const products = await getAllProducts();

  res.json({
    data: products,
  })
}
