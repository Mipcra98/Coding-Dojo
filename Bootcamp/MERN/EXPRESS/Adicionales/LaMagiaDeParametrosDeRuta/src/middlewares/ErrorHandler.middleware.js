const ErrorHandler = (req, res, next) => {
    console.log(req.body)
    next()
}

export default ErrorHandler;