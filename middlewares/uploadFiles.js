import multer from "multer";
import {v2 as cloudinary} from 'cloudinary'
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'avatars',
      allowFortmats: ['jpg', 'png', 'jpeg', 'gif']
    },
  });

const uploadFile = multer({storage})

export default uploadFile