import { ProductService } from "../services/product.services.js";

export class ProductController {
  static async getAllProducts(req, res, next) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(201).json(products);
    } catch (error) {
      next(error);
    }
  }

  static async createProduct(req, res, next) {
    try {
      const newProduct = await ProductService.createNewProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
}
