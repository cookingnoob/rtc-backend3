import CookBooks from "../models/cookbooks.js";
import Recipes from "../models/recipes.js";


//get all recipes
const getAllRecipes = async (req, res, next) => {
    try {
      const recipes = await Recipes.find().populate("cookbook", "title");
      res.status(200).json({ data: recipes });
    } catch (error) {
      next(error);
    }
  };

  //GET id recipe
  const getRecipeById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const recipe = await Recipes.findById(id).populate(
        "cookbook",
        "title genre price"
      );
      if (!recipe) {
        const error = new Error("No se encontró el libro de cocina que buscabas");
        error.status = 404;
        next(error);
      }
      res.status(200).json({ data: recipe });
    } catch (error) {
      next(error);
    }
  };
  
//post new recipe
//put edit recipe
//put edit cookbook in recipe
//delete

export {getAllRecipes, getRecipeById}