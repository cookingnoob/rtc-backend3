import multer from "multer";
import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from "multer-storage-cloudinary";

const handleCloudinaryStorage = (folderName) => {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folderName,
      allowFortmats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
    },
  });
}

const uploadFile = (folderName) => {
  const storage = handleCloudinaryStorage(folderName)
  return multer({ storage })
}

const uploadAvatars = uploadFile('avatars').single('avatar')

const uploadBookCover = uploadFile('covers').single('cover')

// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) { console.log(result); });

export { uploadAvatars, uploadBookCover }