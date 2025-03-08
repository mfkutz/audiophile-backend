import { Router } from "express";
import { OrderController } from "../controllers/order.controller.js";
import { validateCreateOrder } from "../validators/order.validators.js";
import { handleInputErrors } from "../middlewares/validation.js";
import { orderLimiter } from "../config/rate.limit.js";

const router = Router();

router.post("/", orderLimiter, validateCreateOrder, handleInputErrors, OrderController.createOrder);
router.get("/", OrderController.getAll);
router.get("/:id", OrderController.getOrderById);

export default router;
