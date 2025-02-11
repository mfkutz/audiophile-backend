import rateLimit from "express-rate-limit";

//  Stricter limit for login (to prevent brute-force attacks)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: "Too many login attempts. Try again later.",
});

//  More relaxed limit for general API requests
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many requests, please try again later.",
});

export function applyRateLimit(app) {
  app.use("/api/auth/login", loginLimiter);
  app.use("/api", apiLimiter); // Apply to all other routes
}
