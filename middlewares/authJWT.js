import jwt from 'jsonwebtoken'
import { verifyToken } from '../config/jwt.js';

const validateToken = async (req, res, next)=> {
    try {

    const {authorization} = req.headers;
    const [, token] = authorization.split(' ')

    if(!token){
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

        const validToken = verifyToken(token)

        req.user = validToken

        next()
    } catch (error) {
        next(error)
    }
}

export {validateToken}