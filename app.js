import "dotenv/config.js"
import express from 'express'
import dbConnection from "./config/connectDB.js"
import seedDB from "./config/seedDB.js"
import { updateCookBooksWithRecipesId, updateRecipesWithBookId } from "./config/linkCollectionsIds.js"
import cookbookRouter from './routes/cookbook.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


dbConnection()

//Estas 3 funciones son para poblar la bbdd y enlazar los ids entre colecciones
//poblar la bbdd, true es un parametro opcional para limpiar la base antes de poblarla
// seedDB(true)

//cambia el nombre de las recetas por sus ids en la coleccion cookbooks
// updateCookBooksWithRecipesId()


//cambia el nombre del libro por su id en la coleccion recipes
// updateRecipesWithBookId()

app.use("/cookbooks", cookbookRouter)

const PORT = 4001

app.listen(PORT, () => {
    console.log(`conectado al puerto ${PORT}`)
})