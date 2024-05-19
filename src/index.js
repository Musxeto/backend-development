import "dotenv/config";
import path from "path";
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

console.log("Current directory:", path.resolve());

const app = express();

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err.message);
  });
