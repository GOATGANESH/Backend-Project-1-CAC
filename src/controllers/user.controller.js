import asyncHandler from "../utils/asynchHandler.js";
import { ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {User} from "../models/user.model.js";
import uploadFileOnCloudinary from "../utils/cloudinary.js";


const userRegister = asyncHandler(async (req,res,next)=>{
    // get details from the user ✅
    // validate the details ✅
    // check if the user already exists✅
    // check for the avatar✅
    // upload image on cloudinary ✅
    // check if response is recieved or not✅
    // add user to Database
    // remove password and refreshToken from the response

    const {username,fullname,email,password} = req.body

    if([username,fullname,email,password].some(field=>field?.trim()==="")){
        throw new ApiError(400,"All fields are required !");
    }

    const existedUser = await User.findOne({
        $or:[{username},{email}]
    }) 
    if(existedUser) throw new ApiError(409,"User already exists !");
    const avatarLocalPath = req.files?.avatar[0]?.path
    // const coverImageLocalPath = req.files?.coverImage[0]?.path
    let coverImageLocalPath;

    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files.coverImage[0].path;
    }
    
    if(!avatarLocalPath) throw new ApiError(400,"Provide avatar image");
    const avatarImageResult = await uploadFileOnCloudinary(avatarLocalPath);
    const coverImageResult = await uploadFileOnCloudinary(coverImageLocalPath);

    if(!avatarImageResult) throw new ApiError(500,"Server mein gadbad !");

   const user = await User.create({
        username:username.toLowerCase(),
        fullname,
        email,
        avatar:avatarImageResult.url,
        coverImage:coverImageResult?.url || "",
        password,
    })

    const userResponse = await User.findById(user._id).select("-password -refreshToken")

    if(!userResponse) throw new ApiError(500,"Something went wrong while registering user !");

    res.status(200).json(
        new ApiResponse(200,userResponse,"Created successfully !!")
    )
})

export {userRegister};