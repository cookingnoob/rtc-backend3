import mongoose from 'mongoose'

const recipesSchema = new mongoose.Schema(
    {
        name: String,
        cookbook: String,
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