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
const postNewCoobook = async(req, res, next) => {
  try {
    const {title, price, genre, recipes} = req.params
    const newCookBook = new CookBooks({
      title,
      price, 
      genre, 
      recipes,
    })
    await newCookBook.save()
    res.status(200).json({data: newCookBook})
  } catch (error) {
    next(error)
  }
}

//put editar libro
//put editar recetas
//delete

export { getAllCookBooks, getCookBookById };
