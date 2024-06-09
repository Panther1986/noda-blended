import { Product } from "../db/Product.js"


export const getAllProducts = () => Product.find();
