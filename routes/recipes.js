import express from 'express'
import { deleteRecipe, getAllRecipes, getRecipeById, postNewRecipe, putEditRecipe } from '../controller/recipes.js'

const router = express.Router()

router.get("/", getAllRecipes)

router.get("/:id", getRecipeById)

router.post("/add", postNewRecipe)

router.put("/edit/:id", putEditRecipe)

router.delete("/delete/:id", deleteRecipe)

export default router