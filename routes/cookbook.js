import express from 'express'
import { deleteBookCover, deleteCookBook, deleteRecipeFromCookbook, getAllCookBooks, getCookBookById, handleCoverUrlInDb, postNewCoobook, putEditCookBook, putEditRecipesInCookBook } from '../controller/cookbook.js'
import { validateToken } from '../middlewares/authJWT.js'
import { uploadBookCover } from '../middlewares/uploadFiles.js'

const router = express.Router()

router.get('/', getAllCookBooks)

router.get('/:id', getCookBookById)

router.post('/add', validateToken, postNewCoobook)

router.post('/add-cover/:id', validateToken, uploadBookCover, handleCoverUrlInDb)

router.patch('/edit/:id', validateToken, putEditCookBook)

router.patch('/update-recipes/:id', validateToken, putEditRecipesInCookBook)

router.delete('/delete/:id', validateToken, deleteCookBook)

router.delete('/delete-cover/:id', validateToken, deleteBookCover)

router.delete('/delete-recipe/:id', validateToken, deleteRecipeFromCookbook)


export default router