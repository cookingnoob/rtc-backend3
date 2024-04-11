import express from 'express'
import { deleteRecipe, getAllRecipes, getRecipeById, postNewRecipe, putEditCookbookInRecipe, putEditRecipe } from '../controller/recipes.js'
import { validateToken } from '../middlewares/authJWT.js'

const router = express.Router()

router.get("/", getAllRecipes)

router.get("/find/:id", getRecipeById)

router.post("/add", validateToken,postNewRecipe)

router.put("/edit/:id", validateToken, putEditRecipe)

router.put("/edit-cookbook/:id", validateToken, putEditCookbookInRecipe)

router.delete("/delete/:id", validateToken, deleteRecipe)

export default router