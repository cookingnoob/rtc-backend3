import express from 'express'
import { getAllCookBooks, getCookBookById } from '../controller/cookbook.js'

const router = express.Router()

router.get('/', getAllCookBooks)

router.get('/:id', getCookBookById)

router.post('/add')

router.put('/edit/:id')

router.put('/:id/update-recipes')

router.delete('/delete/:id')

router.use((req, res, next) => {
    const error = new Error('No encontramos el libro de cocina')
    error.status = 404
    next(error)
})

export default router