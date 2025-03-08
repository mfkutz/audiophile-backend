import { ProductService } from "../services/product.services.js";

export class ProductController {
  static async getAllProducts(req, res, next) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).json(products);
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

  static async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await ProductService.getProductById(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async deleteProductById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await ProductService.deleteProductById(id);
      res.status(200).json({ message: "Product deleted", product });
    } catch (error) {
      next(error);
    }
  }
}
