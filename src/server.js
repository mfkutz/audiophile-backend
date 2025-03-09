import express from "express";
import { applyRateLimit } from "./config/rate.limit.js";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index.js";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import { corsConfig } from "./config/cors.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors(corsConfig));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", 1);

//Limit rate force brute, allways before general routes
applyRateLimit(app);

//Routes
app.use("/api", routes);
app.use((req, res) => {
  res.status(404).json({ error: "Route not found", message: "The route you are looking for does not exist" });
});

app.use(errorHandler);

export default app;
