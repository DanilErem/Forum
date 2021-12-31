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
            const user = req.user;
            const jwt = await userService.check(user);

            return res.json(jwt);
        } catch(e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const users = await userService.getAll()
            return res.json(users)
        } catch(e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const user = await userService.getOne(id)
            return res.json(user)
        } catch(e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params
            const user = await userService.delete(id)
            return res.json(user)
        } catch(e) {
            next(e)
        }
    }
}

export default new UserController()
