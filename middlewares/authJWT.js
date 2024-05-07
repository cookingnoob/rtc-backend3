import { verifyToken } from './jwt.js';

const validateToken = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            const error = new Error('No token, authorization denied')
            error.status = 401
            next(error)
            return
        }
        const [, token] = authorization.split(' ')
        if (!token) {
            const error = new Error('No token, authorization denied')
            error.status = 401
            next(error)
        }
        const validToken = verifyToken(token)
        req.user = validToken
        next()
    } catch (error) {
        next(error)
    }
}

export { validateToken }