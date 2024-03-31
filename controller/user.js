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
        res.status(200).json({data: `se creo el usuario ${email}`})

    } catch (error) {
        next(error)
    }
}

const loginUser = async(req, res, next) => {
    try {
        const {email, password} = req.body

        const userInDB = await Users.findOne({email: email})

        if(!userInDB){
            const error = new Error('Verifica tus datos para iniciar sesion')
            error.status = 404
            next(error)
        }
        const isPasswordCorrect = await bcrypt.compare(password, userInDB.password)

        if(!isPasswordCorrect){
            const error = new Error('Verifica tus datos para iniciar sesion')
            error.status = 404
            next(error)
        }

        if(userInDB && isPasswordCorrect){
            res.status(200).json({data: 'datos correctos para iniciar sesion'})
        }

    } catch (error) {
        next(error)
    }
}

export {registerUser, loginUser}