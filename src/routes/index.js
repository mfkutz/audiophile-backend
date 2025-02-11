import { Router } from "express";
import product from "./products.js";

const router = Router();

router.use("/product", product);

export default router;
