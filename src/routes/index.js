import { Router } from "express";
import checkout from "./checkout.js";

const router = Router();

router.get("/checkout", checkout);

export default router;
