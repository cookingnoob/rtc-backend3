import "dotenv/config.js"
import express from 'express'
import dbConnection from "./config/connectDB.js"
import seedDB from "./config/seedDB.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


dbConnection()


seedDB(true)

const PORT = 4001

app.listen(PORT, () => {
    console.log(`conectado al puerto ${PORT}`)
})