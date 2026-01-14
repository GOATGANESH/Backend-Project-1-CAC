import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "ganesh-cloud",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFileOnCloudinary = async function (localFilePath) {
  if (!localFilePath) return "File not found !";
  try {
    const respons = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return error;
  }
};

export default uploadFileOnCloudinary;