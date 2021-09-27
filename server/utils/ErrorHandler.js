class ErrorHandler extends Error{
    constructor(status, message, errors){
        super(message);
        this.status = status;
        this.errors = errors;
    }
    static BadRequest = (message, errors =[]) =>{
        return new ErrorHandler(400, message, errors);
    }
    static UnauthorizedError = () =>{
        return new ErrorHandler(401, 'You are not authorized')
    }
    static ForbiddenError = (message) =>{
        return new ErrorHandler(403, message);
    }
    static ServerInternalError = () =>{
        return new ErrorHandler(500, "Something is not okay with server, please try again later for Femida's sake")
    }
}

module.exports = ErrorHandler;