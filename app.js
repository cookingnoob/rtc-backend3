import "dotenv/config.js"
import express from 'express'
import dbConnection from "./config/connectDB.js"
import seedDB from "./config/seedDB.js"
import { updateCookBooksWithRecipesId, updateRecipesWithBookId } from "./config/linkCollectionsIds.js"
import cookbookRouter from './routes/cookbook.js'
import recipesRouter from './routes/recipes.js'
import userRouter from './routes/user.js'
import { limiter } from "./middlewares/rateLimiter.js"
import cors from 'cors'
import {v2} from 'cloudinary'

const app = express()

app.use(cors({
    origin: (origin, callback) => {
        callback(null, true);
    },
}))

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

//

app.use(limiter)
app.use("/cookbooks", cookbookRouter)
app.use("/recipes", recipesRouter)
app.use('/user', userRouter)

app.use((req, res, next) => {
    const error = new Error ("No encontramos lo que buscabas")
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    console.error(err)
    if(err.status){
        res.status(err.status).json({error: err.message})
    }else if (err.name === 'ValidationError'){
        res.status(400).json({error: 'Validación fallida', error: err.message})
    }else if (err.code && err.code === 11000){
        res.status(409).json({error: 'La informacion se está duplicando'})
    }else{
        res.status(500).json({error: 'Error interno en el servidor'})
    }
})

const PORT = 4001

app.listen(PORT, () => {
    console.log(`conectado al puerto ${PORT}`)
})