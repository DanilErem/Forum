import ApiError from "../exceptions/ApiError.js"

export default (err, req, res, next) => {
    console.log(err, err.constructor.name)
    if (err.constructor.name == "ApiError") {
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
    else {
        return res.status(500).json({message: 'Unexpected error'})
    }
}