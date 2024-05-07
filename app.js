import "dotenv/config.js"
import express from 'express'
import dbConnection from "./config/connectDB.js"
import cookbookRouter from './routes/cookbook.js'
import recipesRouter from './routes/recipes.js'
import userRouter from './routes/user.js'
import { limiter } from "./middlewares/rateLimiter.js"
import cors from 'cors'
import helmet from 'helmet'


//CONFIG
const app = express()

app.use(cors({
    origin: (origin, callback) => {
        callback(null, true);
    },
}))

app.disable('x-powered-by');

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

//MONGODB
dbConnection()

app.set('trust proxy', true);
app.use(limiter)

//RUTAS
app.use("/cookbooks", cookbookRouter)
app.use("/recipes", recipesRouter)
app.use('/user', userRouter)

app.use('/', (req, res, next) => {
    res.redirect('/cookbooks')
})

//MANEJO ERRORES
app.use((req, res, next) => {
    const error = new Error("No encontramos lo que buscabas")
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    console.error(err)
    if (err.status) {
        res.status(err.status).json({ error: err.message })
    } else if (err.name === 'ValidationError') {
        res.status(400).json({ error: 'Validación fallida', error: err.message })
    } else if (err.code && err.code === 11000) {
        res.status(409).json({ error: 'La informacion se está duplicando' })
    } else {
        res.status(500).json({ error: 'Error interno en el servidor' })
    }
})

const port = process.env.PORT || 3000

app.listen(port, '0.0.0.0', () => {
    console.log(`conectado en http://localhost:${port}`)
})