
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import { asyncHandler } from './asyncHandler.js'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

const uploadOnCloudinary = asyncHandler(async(localfilepath) => {
    try{
        if(!localfilepath) return null
        const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type:"auto",    
        })
    //   fs.unlinkSync(localfilepath)
    console.log('response from cloudinary',response)
      return response
    }catch(error){
        // fs.unlinkSync(localfilepath)
        console.log('got some error',error)
        return null
    }
})

export {
    uploadOnCloudinary
}