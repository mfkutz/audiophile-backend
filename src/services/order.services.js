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
    /* data.orderItems = data.orderItems.map((item) => {
      if (!mongoose.Types.ObjectId.isValid(item.productId)) {
        throw CustomError.newError(errors.badRequest, `Invalid productId: ${item.productId}`);
      }
      return {
        productId: new mongoose.Types.ObjectId(item.productId),
        quantity: item.quantity,
      };
    }); */

    const newOrder = await OrderRepository.create(data);
    return newOrder;
  }
}
