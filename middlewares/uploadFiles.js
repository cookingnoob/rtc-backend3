import multer from "multer";
import {v2 as cloudinary} from 'cloudinary'
import { CloudinaryStorage } from "multer-storage-cloudinary";

const handleCloudinaryStorage = (folderName) => {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folderName,
      allowFortmats: ['jpg', 'png', 'jpeg', 'gif']
    },
  });
}

const uploadFile = (folderName) => {
  const storage = handleCloudinaryStorage(folderName)
  return multer({storage}) 
}

const uploadAvatars = uploadFile('avatars').single('avatar')

const uploadBookCover = uploadFile('covers').single('cover')

export {uploadAvatars, uploadBookCover}