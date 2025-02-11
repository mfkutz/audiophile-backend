import { Schema, model } from "mongoose";

const imageSchema = new Schema({
  mobile: { type: String, required: true },
  tablet: { type: String, required: true },
  desktop: { type: String, required: true },
});

const includeSchema = new Schema({
  quantity: { type: Number, required: true },
  item: { type: String, required: true },
});

const gallerySchema = new Schema({
  first: { type: imageSchema, required: true },
  second: { type: imageSchema, required: true },
  third: { type: imageSchema, required: true },
});

const otherProductSchema = new Schema({
  slug: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: imageSchema, required: true },
});

const ProductSchema = new Schema({
  slug: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: imageSchema, required: true },
  category: { type: String, required: true },
  categoryImage: { type: imageSchema, required: true },
  new: { type: Boolean, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  features: { type: String, required: true },
  includes: { type: [includeSchema], required: true },
  gallery: { type: gallerySchema, required: true },
  others: { type: [otherProductSchema], required: true },
});

export const ProductModel = model("Product", ProductSchema);
