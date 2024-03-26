import CookBooks from "../models/cookbooks.js"
import Recipes from "../models/recipes.js"

//GET busca todos los libros de cocina y obtiene el nombre de las recetas
const getAllCookBooks = async(req, res, next) => {
    try {
        const cookbooks = await CookBooks.find().populate('recipes', 'name')
        res.status(200).json({data: cookbooks})
    } catch (error) {
        next(error)
    }
}
//Get busca un libro por su id
const getCookBookById = async(req, res, next) => {
    try {
        const {id} = req.params
        const cookbook = await CookBooks.findById(id).populate('recipes', 'name ingredients steps')
        if(!cookbook){
            const error = new Error ('No se encontró el libro de cocina que buscabas')
            error.status = 404
            next(error)
        }
        res.status(200).json({data: cookbook})
    } catch (error) {
        next(error)
    }
}

//post new book
//put editar libro
//put editar recetas
//delete

export {getAllCookBooks, getCookBookById}