import { body, param } from "express-validator";

export const validateProductId = [param("id").isMongoId().withMessage("Invalid ID")];
