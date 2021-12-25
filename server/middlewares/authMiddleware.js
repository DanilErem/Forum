import ApiError from "../exceptions/apiError.js"
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            throw ApiError.UnauthorizedError();
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (!decoded) {
            throw ApiError.UnauthorizedError();
        }
        req.user = decoded;
        next();
    } catch (e) {
        next(ApiError.UnauthorizedError());
    }
};