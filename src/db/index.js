import mongoose from "mongoose";

import { DB_NAME } from "../constants";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Mongo DB CONNECTED!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("DB CONNECTION ERROR:", error);
    throw error;
  }
};

export default connectDB;
