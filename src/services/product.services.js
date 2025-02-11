import { ProductRepository } from "../repositories/product.repository.js";
import { CustomError } from "../utils/errors/custom.error.js";
import errors from "../utils/errors/dictionaty.errors.js";

export class ProductService {
  static async getAllProducts() {
    const products = await ProductRepository.getAll();
    if (products.length === 0) {
      return CustomError.newError(errors.notFound, "There are no products");
    }
    return products;
  }

  static async createNewProduct(data) {
    try {
      const sanitizedData = this.validateAndSanitizeProduct(data);

      const newProduct = await ProductRepository.create(sanitizedData);

      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  static validateAndSanitizeProduct(data) {
    const requiredFields = [
      "slug",
      "name",
      "image",
      "category",
      "categoryImage",
      "new",
      "price",
      "description",
      "features",
      "includes",
      "gallery",
      "others",
    ];

    for (const field of requiredFields) {
      if (data[field] === undefined || data[field] === null) {
        throw CustomError.newError(errors.badRequest, `Missing required field: ${field}`);
      }
    }

    return {
      slug: data.slug.trim(),
      name: data.name.trim(),
      image: data.image,
      category: data.category.trim(),
      categoryImage: data.categoryImage,
      new: Boolean(data.new),
      price: Number(data.price),
      description: data.description.trim(),
      features: data.features.trim(),
      includes: Array.isArray(data.includes) ? data.includes : [],
      gallery: data.gallery,
      others: Array.isArray(data.others) ? data.others : [],
    };
  }
}
