import express from 'express'
import { getAllCookbooks } from '../controller/cookbook.js'

const router = express.Router()

router.get('/', getAllCookbooks)

export default router