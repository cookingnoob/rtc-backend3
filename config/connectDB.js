import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('conectado a la db')
    } catch (error) {
        console.error(`error al conectarse a la db ${error.message}`)
    }
}

export default dbConnection