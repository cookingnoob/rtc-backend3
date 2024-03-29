import bcrypt from 'bcrypt'
import Users from '../models/user.js'

const registerUser = async (req, res, next) => {
    try {
        const {email, password} = req.body

        const userExists = await Users.findOne({email: email})
        if(userExists){
            const error = new Error ('ya existe ese usuario')
            error.status = 400
            next(error)
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new Users(
                                {
                                    email: email,
                                    password: hashedPassword
                                })
        await newUser.save()
        res.status(200).json({data: `se creo el usuario ${email} hashed password ${hashedPassword}`})

    } catch (error) {
        next(error)
    }
}

export {registerUser}