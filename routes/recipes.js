import express from 'express'
import { deleteRecipe, getAllRecipes, getRecipeById, postNewRecipe } from '../controller/recipes.js'

const router = express.Router()

router.get("/", getAllRecipes)

router.get("/:id", getRecipeById)

router.post("/add", postNewRecipe)

router.delete("/delete/:id", deleteRecipe)

export default router