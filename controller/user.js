import bcrypt from 'bcrypt'
import Users from '../models/user.js'
import { signToken } from '../config/jwt.js'
import { validationResult } from 'express-validator'

const registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
          return res.status(400).json({errors: errors.array()})
        }

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
        const payload = {id: newUser._id}
        const token = signToken(payload)
        res.status(200).json({data: `se creo el usuario ${email}`, token})

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
            const payload = {id: userInDB._id}
            const token = signToken(payload)
            res.status(200).json({data: 'Iniciaste sesion', token})
        }

    } catch (error) {
        next(error)
    }
}


const handleAvatarUrlInDb = async (req, res, next) => {
    try{
        const {path} = req.file;
        const {id} = req.user
        const userExist = await Users.findByIdAndUpdate(id, {avatar: path}, {new: true, runValidators: true})
        if(!userExist){
            const error = new Error('no existe este usuario')
            error.status = 404
            next(error)
        }
        res.status(200).json({data: 'se subio el avatar exitosamente'})
    }catch(error){
        next(error)
    }
}

export {registerUser, loginUser, handleAvatarUrlInDb}