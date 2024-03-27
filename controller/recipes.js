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
const postNewRecipe = async (req, res, next) => {
    try {
      const { name, cookbook, steps, ingredients } = req.body;
      let bookId 
      if (cookbook) {
          //busca si existe el libro, si existe se extrae ese id
          //si no existe se crea un nuevo libro

          const existingBook = await CookBooks.findOne({title: cookbook})
            bookId = existingBook._id
        }else {
            const newCookBook = await new Recipes({ title: cookbook.title });
            await newCookBook.save();
            console.log('se creó un libro nuevo')
            bookId = newCookBook
      }
      const newRecipe = new Recipes({
        name,
        cookbook: bookId,
        steps,
        ingredients,
      });
      await newRecipe.save();
      res.status(200).json({ data: newRecipe });
    } catch (error) {
      next(error);
    }
  };

//put edit recipe
//put edit cookbook in recipe
//delete

export {getAllRecipes, getRecipeById, postNewRecipe}