import { ProductModel } from "../models/product.js";

export class ProductRepository {
  static async getAll() {
    return await ProductModel.find();
  }

  static async create(data) {
    return await ProductModel.create(data);
  }
}
