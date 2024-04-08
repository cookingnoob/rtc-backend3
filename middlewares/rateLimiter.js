import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
    windowMs: 3 * 60 * 1000,
    limit: 50
})

export {limiter}