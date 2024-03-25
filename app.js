import "dotenv/config.js"
import express from 'express'
import dbConnection from "./config/connectDB.js"
import seedDB from "./config/seedDB.js"
import { updateCookBooksWithRecipesId, updateRecipesWithBookId } from "./config/linkCollectionsIds.js"
import cookbookRouter from './routes/cookbook.js'
import recipesRouter from './routes/recipes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


dbConnection()

//Estas 3 funciones son para poblar la bbdd y enlazar los IDS entre colecciones
// seedDB(true)
    //poblar la bbdd, 
    //true es un parametro opcional para limpiar la bbdd antes de poblarla

// updateCookBooksWithRecipesId()
    //Actualiza la coleccion coobooks
    //Actualiza el nombre de las recetas por sus ids en la coleccion cookbooks


// updateRecipesWithBookId()
    //Actualiza la coleccion recipes
    //actualiza el nombre del libro por su id en la coleccion recipes

app.use("/cookbooks", cookbookRouter)
app.use("/recipes", recipesRouter)

const PORT = 4001

app.listen(PORT, () => {
    console.log(`conectado al puerto ${PORT}`)
})