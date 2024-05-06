import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email:
    {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:
    {
        type: String,
    },
    avatar:
        { type: String }
},
    { timestamps: true }
)

const Users = mongoose.model('users', userSchema)

export default Users