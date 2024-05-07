import "dotenv/config.js"
import CookBooks from "../models/cookbooks.js";
import Recipes from "../models/recipes.js";
import dbConnection from "./connectDB.js";

const updateCookBooksWithRecipesId = async () => {
    const cookbooks = await CookBooks.find()
    for (const cookbook of cookbooks) {
        try {
            const recipesInBook = await Recipes.find({ cookbookName: cookbook.title });
            const recipesIDs = recipesInBook.map((recipe) => recipe._id)
            cookbook.recipes = recipesIDs
            await cookbook.save()
            console.log('se actualizó el valor recipes en vez de nombres son ids')
        } catch (error) {
            console.error(`no se pudo actualizar ${cookbook.title}. Error: ${error.message}`)
        }
    }
}

const updateRecipesWithBookId = async () => {
    const recipes = await Recipes.find()
    for (const recipe of recipes) {
        try {
            const cookbookWithRecipe = await CookBooks.findOne({ recipes: recipe._id })
            if (!cookbookWithRecipe) {
                console.error(`no se encuentra el libro de la receta: ${recipe.cookbook}`)
            }
            await Recipes.updateOne({ _id: recipe._id }, { $unset: { cookbookName: "" } })
            recipe.cookbook = cookbookWithRecipe._id
            await recipe.save()
        } catch (error) {
            console.error(`no se pudo actualizar el valor de ${recipe.name}. error: ${error.message}`)
            continue
        }
    }
    console.log('se actualizaron los valores de cookbook en la coleccion recipes')
}

const linkingFlow = async () => {
    await dbConnection()
    await updateCookBooksWithRecipesId()
    updateRecipesWithBookId()
}

linkingFlow()