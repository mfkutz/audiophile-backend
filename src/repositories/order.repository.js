import { OrderModel } from "../models/order.js";

export class OrderRepository {
  static async getAll() {
    return await OrderModel.find();
  }

  static async create(data) {
    return await OrderModel.create(data);
  }

  static async getById(orderId) {
    return await OrderModel.findById(orderId);
  }

  static async deleteById(id) {
    return await OrderModel.findByIdAndDelete(id);
  }
}
