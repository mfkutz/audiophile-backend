import { Schema, model } from "mongoose";

const OrderSchema = new Schema(
  {
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    payment: {
      eMoneyNumber: { type: String },
      eMoneyPin: { type: String },
    },
    orderItems: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product" },
        name: { type: String, required: true },
        unitPrice: { type: Number, required: true },
        imageUrl: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    shippingCost: { type: Number, required: true },
  },
  { timestamps: true }
);

export const OrderModel = model("Order", OrderSchema);
