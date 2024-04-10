import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
    windowMs: 3 * 60 * 1000,
    max: 50,
    keyGenerator: (req) => {
        return req.ip
    },
    validate: {xForwardedForHeader: false}
})

export {limiter}