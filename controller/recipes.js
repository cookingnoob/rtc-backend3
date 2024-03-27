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
    
    //buscar si ya existe esa receta y si si mandar error 409

    const existingBook = await CookBooks.findOne({title: cookbook})

    if(existingBook){
        const newRecipe = new Recipes({
            name,
            cookbook: existingBook._id,
            steps,
            ingredients,
          });
          await newRecipe.save();
          res.status(200).json({ data: newRecipe });
    }else{
         const newCookBook = await new CookBooks({ title: cookbook,});
         await newCookBook.save();
         console.log('se creó un libro nuevo')
         const newRecipe = new Recipes({
            name,
            cookbook: newCookBook._id,
            steps,
            ingredients,
        });
        console.log('se creo la nueva receta')
        await newRecipe.save();
        const updateBookWithId = await CookBooks.findByIdAndUpdate(newCookBook._id,
            {$push: {recipes: newRecipe._id}}
            )
        console.log('el libro tiene la nueva receta')
        res.status(200).json({ data: newRecipe });
    } 
        
   
    } catch (error) {
      next(error);
    }
  };

//put edit recipe
//put edit cookbook in recipe
//delete
const deleteRecipe = async (req, res, next) => {
    try{
        const {id} = req.params
        const recipeToBeDeleted = await Recipes.findByIdAndDelete(id)
        if(!recipeToBeDeleted){
          const error = new Error('no encontramos la receta')
          error.status = 404
          next(error)
          return
        }
        res.status(200).json({data: 'se eliminó la receta'})
      }catch(error){
        next(error)
      }
}

export {getAllRecipes, getRecipeById, postNewRecipe, deleteRecipe}