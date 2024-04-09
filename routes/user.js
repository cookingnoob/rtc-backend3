import express from 'express'
import { loginUser, registerUser, uploadUserAvatar } from '../controller/user.js'
import { checkEmailPassword } from '../middlewares/notValidMailPassword.js'
import uploadFile from '../middlewares/uploadFiles.js'
import { validateToken } from '../middlewares/authJWT.js'

const router = express.Router()

router.post("/create-account",checkEmailPassword ,registerUser)

router.post("/login", loginUser)

router.post('/upload-avatar',validateToken ,uploadFile.single('avatar'), (req, res, next) => {
    const {path} = req.file;
    const {id} = req.user
    uploadUserAvatar(id, path)
    res.status(200).json({data: path})
})


export default router