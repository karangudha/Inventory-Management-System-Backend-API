import { Router } from "express";
import { decreaseQuantity, getAllProduct, increaseQuantity, lowStockProduct } from "../controllers/inventory.Controller.js";

const router = Router();

router.route("/add").post(increaseQuantity);
router.route("/remove").post(decreaseQuantity);
router.route("/low-quantity").get(lowStockProduct);
router.route("/all-product").get(getAllProduct);

export default router;