import jwt from 'jsonwebtoken'
import { verifyToken } from '../config/jwt.js';

const validateToken = async (req, res, next)=> {
    const token = req.header('Authorization')

    if(!token){
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const validToken = verifyToken(token)
        next()
    } catch (error) {
        next(error)
    }
}

export {validateToken}