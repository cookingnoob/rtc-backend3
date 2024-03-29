import express from 'express'
import { registerUser } from '../controller/user.js'

const router = express.Router()

router.post("/create-account", registerUser)

export default router