import UserModel from "../models/UserModel.js";
import userService from "../service/userService.js";

class UserController {
    // Dania, chto takoe "next"?
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            const jwt = await userService.registration(email, password);

            return res.json(jwt);
        } catch(e) {
            console.log(e)
            return res.json({Error: e})
        }
    }
// Dania, chto takoe "next"?
    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const jwt = await userService.login(email, password);

            return res.json(jwt);
        } catch(e) {
            console.log(e)
            return res.json({Error: e})
        }
    }
// Dania, chto takoe "next"?
    async list(req, res, next) {
        try {
            return res.json(UserModel.find())
        } catch(e) {
            console.log(e)
            return res.json({Error: e})
        }
    }
}

export default new UserController()
