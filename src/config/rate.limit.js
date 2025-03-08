import rateLimit from "express-rate-limit";

//  Stricter limit for login (to prevent brute-force attacks)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: "Too many requests, please try in a short time." },
});

export const orderLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 2,
  message: { error: "Too many request, please try in a short time." },
  standardHeaders: true, // Enviar cabeceras `RateLimit-*`
  legacyHeaders: false, // Deshabilitar `X-RateLimit-*`
});

//  More relaxed limit for general API requests
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 150,
  message: { error: "Too many request, please try in a short time." },
});

export function applyRateLimit(app) {
  app.use("/api/auth/login", loginLimiter);
  app.use("/api", apiLimiter); // Apply to all other routes
}
