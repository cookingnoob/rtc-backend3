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

//get id recipe
//post new recipe
//put edit recipe
//put edit cookbook in recipe
//delete

export {getAllRecipes}