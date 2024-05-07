import "dotenv/config.js"
import CookBooks from "../models/cookbooks.js";
import Recipes from "../models/recipes.js";
import dbConnection from "./connectDB.js";
import { cookbooks, recipes } from "./seed/seed.js";

const seedDB = async () => {
  try {
    //para limpiar la bbdd
    await Promise.all([CookBooks.deleteMany({}), Recipes.deleteMany({})]);
    console.log("se limpio CookBooks y Recipes");

    //agregar la seed a cookbooks
    await CookBooks.insertMany(cookbooks);
    console.log('se subieron los datos de cookbooks')
    //agregar la seed a recipes
    await Recipes.insertMany(recipes);
    console.log("se subieron los datos de recetas")
  } catch (error) {
    console.error(`no se pudo poblar la db ${error.message}`);
  }
};

dbConnection()
seedDB()