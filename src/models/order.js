import { Schema, model } from "mongoose";

const OrderSchema = new Schema(
  {
    orderId: { type: String, unique: true },
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
      method: { type: String, required: true },
      eMoneyNumber: { type: String },
      eMoneyPin: { type: String },
    },
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

export const OrderModel = model("Order", OrderSchema);
