import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"



const generateAccesstokenAndRefreshToken = async(userId) => {
    try{
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave:false})

        return{accessToken,refreshToken}
    }catch(error){
        throw new ApiError(
            500,
            "something went wrong while generating access or refresh token"
        )
    }
}

const registerUser = asyncHandler(async(req,res) => {
    const {firstName,lastName,email,password} = req.body;
    console.log('req.body',req.body)
    if([firstName,lastName,email,password].some((currVal) => currVal?.trim() === "")){
        throw new ApiError(400,"Every fields are required")
    }

    const isUserExist = await User.findOne({email})
    if(isUserExist){
        throw new ApiError(400,"User already exist with the given email id")
    }

        const avatarLocalPath =  req.file?.path
        console.log('avatarLocalpath',avatarLocalPath)
        const cloudUpload = await uploadOnCloudinary(avatarLocalPath)
        console.log('clouduploading>>>>>>',cloudUpload)
        if(!cloudUpload?.url){
         throw new ApiError(400,"Got error while uploading avatar")
        }

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        avatar: {
            public_id: cloudUpload.public_id,
            secure_url: cloudUpload.secure_url,
          },
      });

      console.log('See the user created or not',user)

      const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
      );
      if (!createdUser) {
        throw new ApiError(500, "Failed to remove password and refreshtoken");
      }
    
      return res
        .status(201)
        .json(new ApiResponse(200, createdUser, "user created successfully"));
    
})

export {registerUser}