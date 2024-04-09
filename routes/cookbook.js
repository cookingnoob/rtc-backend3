import express from 'express'
import { deleteCookBook, getAllCookBooks, getCookBookById, postNewCoobook, putEditCookBook, putEditRecipesInCookBook } from '../controller/cookbook.js'
import { validateToken } from '../middlewares/authJWT.js'
import { uploadBookCover } from '../middlewares/uploadFiles.js'

const router = express.Router()

router.get('/', getAllCookBooks)

router.get('/:id', getCookBookById)

router.post('/add', validateToken ,postNewCoobook)

router.post('/add-cover', validateToken, uploadBookCover)

router.put('/edit/:id',validateToken, putEditCookBook)

router.put('/:id/update-recipes',validateToken ,putEditRecipesInCookBook)

router.delete('/delete/:id',validateToken ,deleteCookBook)

router.use((req, res, next) => {
    const error = new Error('No encontramos el libro de cocina')
    error.status = 404
    next(error)
})

export default router