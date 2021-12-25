import ApiError from "../exceptions/apiError.js";
import UserModel from "../models/UserModel.js";
import userService from "../service/userService.js";

class UserController {

    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            const jwt = await userService.registration(email, password);

            return res.json(jwt);
        } catch(e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const jwt = await userService.login(email, password);

            return res.json(jwt);
        } catch(e) {
            next(e)
        }
    }

    async check(req, res, next) {
        try {
            const {user} = req.body;
            const jwt = await userService.check(user);

            return res.json(jwt);
        } catch(e) {
            next(e)
        }
    }

    async list(req, res, next) {
        try {
            const users = await UserModel.find({})
            return res.json(users)
        } catch(e) {
            next(e)
        }
    }
}

export default new UserController()
