const TokenService = require('./../services/profileService')
const ErrorHandler = require('./../utils/ErrorHandler.js')


const authMiddleware = async (req, res, next) =>{
    if(req.method === "OPTIONS"){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return next(ErrorHandler.UnauthorizedError())
        }
        const userData = TokenService.validateAccessToken(token)
        if(!userData){
            next(ErrorHandler.UnauthorizedError())
        }
        req.user = userData;
        next()
    } catch (error) {
        next(ErrorHandler.UnauthorizedError())
    }
}
module.exports = authMiddleware;