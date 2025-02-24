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

  //TO DO - validate name, unitPrice, imageUrl, quantity
];
