import mongoose from 'mongoose'

const recipesSchema = new mongoose.Schema(
    {
        name: String,
        cookbook: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cookbooks'
        },
        // cookbook: String,
        ingredients: String,
        steps: [{
            type: String
        }]
    },
    {
        timestamps: true,
        model: "recipes"
    }
)

const Recipes = mongoose.model('Recipes', recipesSchema)

export default Recipes