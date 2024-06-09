import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getProductsController } from "../controllers/products.js";

const router = Router();

router.get("/", ctrlWrapper(getProductsController))

export default router;
