import mongoose from 'mongoose'

const cookBookSchema = new mongoose.Schema(
    {
        title: String,
        price: Number,
        genre: String,
        recipes: [
            {type: String}
        ]
    },
    {
        timestamps: true,
        model: 'cookbooks'
    }
) 

const CookBooks = mongoose.model("Cookbooks", cookBookSchema)

export default CookBooks