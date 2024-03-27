import express from 'express'
import { getAllRecipes, getRecipeById, postNewRecipe } from '../controller/recipes.js'

const router = express.Router()

router.get("/", getAllRecipes)

router.get("/:id", getRecipeById)

router.post("/add", postNewRecipe)

export default router