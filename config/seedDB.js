import CookBooks from "../models/cookbooks.js";
import Recipes from "../models/recipes.js";
import { cookbooks, recipes } from "./seed/seed.js";

const seedDB = async (cleanDB) => {
  try {
    //para limpiar la bbdd
    if (cleanDB === true) {
      try {
        await Promise.all([CookBooks.deleteMany({}), Recipes.deleteMany({})]);
        console.log("se limpio CookBooks y Recipes");
      } catch (error) {
        console.error(
          `Hubo un problema limpiando las colecciones ${error.message}`
        );
      }
    }
    //agregar la seed a cookbooks
    await CookBooks.insertMany(cookbooks);

    //agregar la seed a recipes
    await Recipes.insertMany(recipes);
  } catch (error) {
    console.error(`no se pudo poblar la db ${error.message}`);
  }
};

export default seedDB;
