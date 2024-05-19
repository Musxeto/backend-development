import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Mongo DB CONNECTED!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("DB CONNECTION ERROR:", error.message);
    throw new Error(error);
  }
};

export default connectDB;
