import CookBooks from "../models/cookbooks.js";
import Recipes from "../models/recipes.js";

//GET all recipes
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
  
//POST  new recipe
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
const putEditRecipe = async (req, res, next) => {
    try{
      const {id} = req.params;
      const {name, cookbook, ingredients, steps } = req.body
      if(cookbook){
        const error = new Error ('no puedes editar el libro de cocina aquí')
        error.status = 400
        next(error)
        return
      }
      const editRecipe = await Recipes.findByIdAndUpdate(id,
        {name, ingredients, steps},
        {new: true, runValidators: true}
      )
      if(!editRecipe){
        const error = new Error ('no se encontró la receta que quieres editar')
        error.status = 404
        next(error)
        return
      }
      res.status(200).json({data: editRecipe})
    } catch(error){
      next(error)
    }
  };

//PUT edit cookbook in recipe
const putEditCookbookInRecipe = async (req, res, next) => {
    try {
      const {id} = req.params
      const {name, cookbook, steps, ingredients, deleteCookbook} = req.body

      //checa si hay valores que no sean cookbook y lanza error
      if(name || steps || ingredients){
        const error = new Error ('solo puedes editar el libro de cocina aqui')
        error.status = 400
        next(error)
        return
      }
    
      //busca la receta 
      try{
        const recipe = await Recipes.findById(id)

      } catch{
      //si no existe maneja lanza error
    
        const error = new Error ('no encontramos la receta')
        error.status = 404
        next(error)
      }
      

      //revisa si existe el libro de cocina en la db
      const cookbookAlradyInDB = await CookBooks.findOne({title: cookbook})
      
      
    } catch (error) {
      next(error)
    }
  };
//DELETE    
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

export {getAllRecipes, getRecipeById, postNewRecipe, deleteRecipe, putEditRecipe, putEditCookbookInRecipe}