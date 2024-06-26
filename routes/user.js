import express from 'express'
import { deleteAvatar, handleAvatarUrlInDb, loginUser, registerUser } from '../controller/user.js'
import { checkEmailPassword } from '../middlewares/notValidMailPassword.js'
import { uploadAvatars } from '../middlewares/uploadFiles.js'
import { validateToken } from '../middlewares/authJWT.js'

const router = express.Router()

router.post("/create-account", checkEmailPassword, registerUser)

router.post("/login", loginUser)

router.post('/upload-avatar', validateToken, uploadAvatars, handleAvatarUrlInDb)

router.delete('/delete-avatar', validateToken, deleteAvatar)


export default router