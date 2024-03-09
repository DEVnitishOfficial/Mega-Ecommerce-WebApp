
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import { asyncHandler } from './asyncHandler'


const uploadOnCloudinary = asyncHandler(async(localfilepath) => {
    try{
        if(!localfilepath) return null
        const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type:"auto"
        })
      fs.unlinkSync(localfilepath)
      return response
    }catch(error){
        fs.unlinkSync(localfilepath)
        console.log('got some error',error)
        return null
    }
})

export {
    uploadOnCloudinary
}