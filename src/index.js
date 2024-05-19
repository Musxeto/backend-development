import "dotenv/config";
import express from "express";
import connectDB from "./db/index.js";

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
    throw err;
  });
