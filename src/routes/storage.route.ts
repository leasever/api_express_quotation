import { Router } from "express";
import { postFile } from "../controllers/storage.controller";
import multerMiddleware from "../middleware/file.middleware";
import { checkJwt } from "../middleware/session.middleware";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myFile"), postFile);

export { router };
