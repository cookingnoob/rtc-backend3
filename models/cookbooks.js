import mongoose from 'mongoose'

const cookBookSchema = new mongoose.Schema({
    title: String,
    price: Number,
    genre: String,
    recipes: [
        {type: String}
    ]
}) 

const CookBooks = mongoose.model("Cookbooks", cookBookSchema)

export default CookBooks