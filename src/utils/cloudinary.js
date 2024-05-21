import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";
import { env } from "process";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("file uploaded on clodinary");
    response.url();
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //removes the locally saved temporary filr ftom the server
    return;
  }
};

export { uploadOnCloudinary };
