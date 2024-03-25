import "dotenv/config.js"
import express from 'express'
import dbConnection from "./config/connectDB.js"
import seedDB from "./config/seedDB.js"
import { updateCookBooksWithRecipesId } from "./config/linkCollectionsIds.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


dbConnection()

//poblar la bbdd, true es un parametro opcional para limpiar la base antes de poblarla
// seedDB(true)

//cambia el nombre de las recetas por sus ids en la coleccion cookbooks
updateCookBooksWithRecipesId()

const PORT = 4001

app.listen(PORT, () => {
    console.log(`conectado al puerto ${PORT}`)
})