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

// const uploadImage = async (file, folderName) => {
//   const options = {
//     use_filename: true,
//     unique_filename: false,
//     overwrite: true,
//   };
//   try {
//     const result = await cloudinary.uploader.upload(file.path, {folder: folderName});
//     console.log(result);
//     return result.public_id, result.url;
//   } catch (error) {
//     console.error(`error en subir a cloudinary ${error}`);
//   }
// };


export { uploadAvatars, uploadBookCover }