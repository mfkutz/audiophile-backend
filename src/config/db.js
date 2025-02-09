import mongoose from "mongoose";
import { exit } from "node:process";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DATABASE_URL);
    const url = `${connection.host}:${connection.port}`;
    console.log(`Mongo Connected to: ${url}`);
  } catch (error) {
    console.log("Error connecting to MongoDB");
    exit(1);
  }
};
