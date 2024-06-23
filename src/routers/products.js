import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getProductsController,createPoductController,deleteProductController } from "../controllers/products.js";

const router = Router();

router.get("/", ctrlWrapper(getProductsController));

router.post("/", ctrlWrapper(createPoductController));

router.delete("/:productId",ctrlWrapper(deleteProductController))

export default router;
