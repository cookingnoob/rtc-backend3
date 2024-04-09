import express from 'express'
import { loginUser, registerUser } from '../controller/user.js'
import { checkEmailPassword } from '../middlewares/notValidMailPassword.js'
import uploadFile from '../middlewares/uploadFiles.js'

const router = express.Router()

router.post("/create-account",checkEmailPassword ,registerUser)

router.post("/login", loginUser)

router.post('/upload-avatar',uploadFile.single('avatar'), (req, res, next) => {
    console.log(req.file)

    res.status(200).json({data: ''})
})


export default router