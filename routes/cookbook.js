import express from 'express'
import { getAllCookBooks, getCookBookById } from '../controller/cookbook.js'

const router = express.Router()

router.get('/', getAllCookBooks)

router.get('/:id', getCookBookById)

export default router