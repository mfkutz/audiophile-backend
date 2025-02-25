import { OrderServices } from "../services/order.services.js";

export class OrderController {
  static async getAll(req, res, next) {
    try {
      const orders = await OrderServices.getAllOrders();
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  static async createOrder(req, res, next) {
    try {
      const { customer, payment, orderItems, totalAmount, shippingCost } = req.body;
      const newOrder = await OrderServices.createOrder({ customer, payment, orderItems, totalAmount, shippingCost });
      res.status(201).json({
        message: "Order created successfully",
        order: newOrder,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getOrderById(req, res, next) {
    try {
      const { id } = req.params;
      const order = await OrderServices.getOrderById(id);
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }
}
