import CookBooks from "../models/cookbooks.js";
import Recipes from "../models/recipes.js";

const updateCookBooksWithRecipesId = async () => {
    const cookbooks = await CookBooks.find()
    for (const cookbook of cookbooks){
        try {
            const recipesInBook = await Recipes.find({cookbook: cookbook.title});
            const recipesIDs = recipesInBook.map((recipe) => recipe._id)
            cookbook.recipes = recipesIDs
            await cookbook.save()
            console.log('se actualizó el valor recipes en vez de nombres son ids')
        } catch (error) {
            console.error(`no se pudo actualizar ${cookbook}. Error: ${error.message}`)
        }
    }
}

export {updateCookBooksWithRecipesId}