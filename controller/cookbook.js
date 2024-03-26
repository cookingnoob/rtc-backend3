import CookBooks from "../models/cookbooks.js";
import Recipes from "../models/recipes.js";

//GET busca todos los libros de cocina y obtiene el nombre de las recetas
const getAllCookBooks = async (req, res, next) => {
  try {
    const cookbooks = await CookBooks.find().populate("recipes", "name");
    res.status(200).json({ data: cookbooks });
  } catch (error) {
    next(error);
  }
};

//GET busca un libro por su id
const getCookBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cookbook = await CookBooks.findById(id).populate(
      "recipes",
      "name ingredients steps"
    );
    if (!cookbook) {
      const error = new Error("No se encontró el libro de cocina que buscabas");
      error.status = 404;
      next(error);
    }
    res.status(200).json({ data: cookbook });
  } catch (error) {
    next(error);
  }
};

//POST crea un nuevo libro
//crea una instancia de Recipes por cada nombre en la lista de recetas
//actualiza recipes cambiando el nombre por el id de la receta
const postNewCoobook = async (req, res, next) => {
  try {
    const { title, price, genre, recipes } = req.body;
    const recipesIds = [];
    if (recipes) {
      try {
        for (const recipe of recipes) {
          const newRecipe = await new Recipes({ name: recipe.name });
          await newRecipe.save();
          recipesIds.push(newRecipe._id);
        }
      } catch (error) {
        next(error);
      }
    }
    const newCookBook = new CookBooks({
      title,
      price,
      genre,
      recipes: recipesIds,
    });
    await newCookBook.save();
    res.status(200).json({ data: newCookBook });
  } catch (error) {
    next(error);
  }
};

//PUT editar libro
const putEditCookBook = async (req, res, next) => {
  try{
    const {id} = req.params;
    const {title, price, genre, recipes} = req.body
    if(recipes){
      const error = new Error ('no puedes editar recetas aquí')
      error.status = 400
      next(error)
      return
    }
    const editCookBook = await CookBooks.findByIdAndUpdate(id,
      {title, price, genre},
      {new: true, runValidators: true}
    )
    if(!editCookBook){
      const error = new Error ('no se encontró el libro que quieres editar')
      error.status = 404
      next(error)
      return
    }
    res.status(200).json({data: editCookBook})
  } catch(error){
    next(error)
  }
};

//PUT editar recetas
const putEditRecipesInCookBook = async (req, res, next) => {
  try {
    const {id} = req.params
    const {title, price, genre, recipe, deleteRecipe} = req.body
    if(title || price || genre){
      const error = new Error ('solo puedes editar recetas aqui')
      error.status = 400
      next(error)
      return
    }
  
    const cookBook = await CookBooks.findById(id)
    const recipeAlradyInDB = await Recipes.findOne({name: recipe})
    
     if(deleteRecipe){
        cookBook.recipes.pull(recipeAlradyInDB._id)
        await cookBook.save()
        res.status(200).json({data: 'Se eliminó la receta del libro'})
     }else if(recipeAlradyInDB && !deleteRecipe){
        const error = new Error ('ya existe esa receta')
        error.status = 409
        next(error)
     }
  } catch (error) {
    next(error)
  }
};

//delete
const deleteCookBook = async (req, res, next) => {};

export {
  getAllCookBooks,
  getCookBookById,
  postNewCoobook,
  putEditCookBook,
  putEditRecipesInCookBook,
  deleteCookBook
};
