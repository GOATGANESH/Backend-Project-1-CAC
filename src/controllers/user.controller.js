import asyncHandler from "../utils/asynchHandler.js";

const userRegister = asyncHandler(async (req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"ganesh the great"
    })
})

export {userRegister};