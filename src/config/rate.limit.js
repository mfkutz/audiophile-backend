import rateLimit from "express-rate-limit";

//  Stricter limit for login (to prevent brute-force attacks)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: "Too many requests, please try in a short time." },
});

const orderLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many request, please try in a short time.",
});

//  More relaxed limit for general API requests
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 150,
  message: "Too many requests, please try again later.",
});

export function applyRateLimit(app) {
  app.use("/api/auth/login", loginLimiter);
  // app.use("/api/order", orderLimiter);
  app.use("/api", apiLimiter); // Apply to all other routes
}
