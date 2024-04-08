import express from 'express'
import { loginUser, registerUser } from '../controller/user.js'
import { checkEmailPassword } from '../middlewares/notValidMailPassword.js'

const router = express.Router()

router.post("/create-account",checkEmailPassword ,registerUser)

router.post("/login", loginUser)



export default router