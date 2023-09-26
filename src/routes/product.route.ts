import { Router } from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  insertProduct,
  updateProduct,
} from "../contollers/product.controller";

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", insertProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export { router };
