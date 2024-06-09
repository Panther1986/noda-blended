import { Product } from "../db/Product.js"


export const getAllProducts = () => Product.find();

export const createProduct = (productData) => Product.create(productData);

export const deleteProduct = (productId) => Product.findByIdAndDelete(productId);
