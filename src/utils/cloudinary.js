import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async(file)=> {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath,{
      resource_type:"auto",
    })
    return result.secure_url
  } catch (error) {
    console.log("Error in uploadInCloudinary" , error);
    throw new error("Error uploading to cloudinary");
  }
}

export {cloudinary}