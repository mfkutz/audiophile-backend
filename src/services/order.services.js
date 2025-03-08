import mongoose from "mongoose";
import { OrderRepository } from "../repositories/order.repository.js";
import { CustomError } from "../utils/errors/custom.error.js";
import errors from "../utils/errors/dictionaty.errors.js";

export class OrderServices {
  static async getAllOrders() {
    const orders = await OrderRepository.getAll();
    if (orders.length === 0) {
      return CustomError.newError(errors.notFound, "There are no orders yet");
    }
    return orders;
  }

  static async createOrder(data) {
    const newOrder = await OrderRepository.create(data);
    return newOrder;
  }

  static async getOrderById(orderId) {
    const order = await OrderRepository.getById(orderId);
    if (!order) return CustomError.newError(errors.notFound, "Order not found");
    return order;
  }

  static async deleteOrderById(id) {
    const order = await OrderRepository.deleteById(id);
    if (!order) return CustomError.newError(errors.notFound, "Order not found");
    return order;
  }
}
