import { body, param } from "express-validator";

export const validateCreateOrder = [
  body("customer.name")
    .notEmpty()
    .trim()
    .escape() //from this <script>alert(1)</script> to this &lt;script&gt;alert(1)&lt;/script&gt;
    .withMessage("Customer name is required")
    .isString()
    .withMessage("Customer name must be a string"),
  body("customer.email")
    .notEmpty()
    .withMessage("Customer email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("customer.phoneNumber").notEmpty().withMessage("Customer phone number is required"),
  // .isMobilePhone("Invalid phone number"), //check this later
  body("customer.address")
    .notEmpty()
    .withMessage("Customer address is required")
    .isString()
    .withMessage("Customer address must be a string"),
  body("customer.city")
    .notEmpty()
    .withMessage("Customer city is required")
    .isString()
    .withMessage("Customer city must be a string"),
  body("customer.zipCode")
    .notEmpty()
    .withMessage("Customer zip code is required")
    .isPostalCode("any")
    .withMessage("Invalid zip code"),
  body("customer.country")
    .notEmpty()
    .withMessage("Customer country is required")
    .isString()
    .withMessage("Customer country must be a string"),
  body("payment.eMoneyNumber")
    .optional({ checkFalsy: true })
    .isInt()
    .withMessage("Only whole number are allowed")
    .isLength({ min: 5, max: 10 })
    .withMessage("Must be at least 5 to 10 digits")
    .toInt(), //check this later
  body("payment.eMoneyPin")
    .optional({ checkFalsy: true })
    .isInt()
    .withMessage("Only whole number are allowed")
    .isLength(4)
    .withMessage("Must be 4 digits")
    .toInt(), //check this later too

  body("orderItems").isArray({ min: 1 }).withMessage("At least one item is required"),
  body("orderItems.*.productId").isMongoId().withMessage("Invalid productId"),

  body("orderItems.*.name")
    .notEmpty()
    .withMessage("Name of product is required")
    .isString()
    .withMessage("Name of product must be a string"),
  body("orderItems.*.unitPrice")
    .notEmpty()
    .withMessage("Price of product is required")
    .isNumeric()
    .withMessage("Price of product must be a number"),
  body("orderItems.*.imageUrl")
    .notEmpty()
    .withMessage("Image of product is required")
    .isString()
    .withMessage("Image of product must be a string"),
  body("orderItems.*.quantity")
    .notEmpty()
    .withMessage("Quantity of product is required")
    .isNumeric()
    .withMessage("Quantity of product must be a number"),

  body("shippingCost")
    .notEmpty()
    .withMessage("Shipping cost is required")
    .isNumeric()
    .withMessage("Shipping cost must be a number"),

  body("totalAmount")
    .notEmpty()
    .withMessage("Total amount is required")
    .isNumeric()
    .withMessage("Total amount must be a number")
    .custom((value, { req }) => {
      const calculatedTotal = req.body.orderItems.reduce(
        (sum, item) => sum + item.unitPrice * item.quantity,
        req.body.shippingCost
      );
      if (value !== calculatedTotal) {
        throw new Error("Total amount does not match the sum of order items");
      }
      return true;
    }),
];
