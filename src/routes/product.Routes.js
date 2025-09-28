import { Router } from "express";
import { productAddAndUpdate, productDelete, productGet } from "../controllers/product.Controller.js";

const router = Router();

router.route("/add").post(productAddAndUpdate);
router.route("/delete").post(productDelete);
router.route("/get").get(productGet)

export default router;