import { check } from "express-validator"



const checkEmailPassword = [
    check("email", "Ingresa un correo válido").isEmail(),
    check("password", "la contraseña dene tener al menos 6 caractéres").isLength({min: 6})
]

export {checkEmailPassword}