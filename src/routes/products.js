import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";
import { validateProductId } from "../validators/product.validators.js";
import { handleInputErrors } from "../middlewares/validation.js";

const router = Router();

router.get("/", ProductController.getAllProducts);
router.post("/", ProductController.createProduct);
router.get("/:id", validateProductId, handleInputErrors, ProductController.getProductById);
router.delete("/:id", validateProductId, handleInputErrors, ProductController.deleteProductById);

export default router;
