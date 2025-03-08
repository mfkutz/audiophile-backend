import { ProductModel } from "../models/product.js";

export class ProductRepository {
  static async getAll() {
    return await ProductModel.find();
  }

  static async create(data) {
    return await ProductModel.create(data);
  }

  static async getProductById(id) {
    return await ProductModel.findById(id);
  }

  static async deleteProductById(id) {
    return await ProductModel.findByIdAndDelete(id);
  }
}
