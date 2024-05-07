import mongoose from 'mongoose'

const cookBookSchema = new mongoose.Schema(
    {
        title: String,
        price: Number,
        genre: String,
        recipes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Recipes"
            }
        ],
        cover: String,
    },
    {
        timestamps: true,
        model: 'cookbooks'
    }
)

const CookBooks = mongoose.model("Cookbooks", cookBookSchema)

export default CookBooks