import "dotenv/config.js"
import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

const PORT = 4001

app.listen(PORT, () => {
    console.log(`conectado al puerto ${PORT}`)
})

//crear modelo 1 y modelo N
//Cocina y Recetas
//la cocina italiana tiene pizzas, pastas, la mexicana tacos, mole, enchiladas

//