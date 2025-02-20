import { Router } from "express";
import product from "./products.js";
import order from "./orders.js";

const router = Router();

router.use("/product", product);
router.use("/order", order);

export default router;
