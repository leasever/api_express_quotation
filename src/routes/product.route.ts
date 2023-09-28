import { Router } from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  postProduct,
  updateProduct,
} from "../controllers/product.controller";
import { logMiddleware } from "../middleware/log.middleware";
import { checkJwt } from "../middleware/session.middleware";

const router = Router();

router.get("/", logMiddleware, getProducts);

router.get("/:id", getProduct);

router.post("/", postProduct);

router.put("/:id", checkJwt, updateProduct);

router.delete("/:id", checkJwt, deleteProduct);

export { router };
