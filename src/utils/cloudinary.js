import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

const uploadFileOnCloudinary = async function (localFilePath) {
  cloudinary.config({
    cloud_name: "ganesh-cloud",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  if (!localFilePath) return "File not found !";
  try {
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    return response;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(localFilePath);
    return error;
  }
};

export default uploadFileOnCloudinary;
