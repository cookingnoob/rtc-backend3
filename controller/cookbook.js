import CookBooks from "../models/cookbooks.js"
import Recipes from "../models/recipes.js"

//get all
const getAllCookbooks = async(req, res, next) => {
    try {
        const cookbooks = await CookBooks.find().populate('recipes', 'name')
        res.status(200).json({data: cookbooks})
    } catch (error) {
        next(error)
    }
}
//get id
//post new book
//put editar libro
//put editar recetas
//delete

export {getAllCookbooks}