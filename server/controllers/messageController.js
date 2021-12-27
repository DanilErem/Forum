import messageService from "../service/messageService.js";

class MessageController {

    async create(req, res, next) {
        try {
            const {text, owner, chat} = req.body;
            const message = await messageService.create(owner, text, chat)
            return res.json(message)
        } catch(e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const messages = await messageService.getAll()
            return res.json(messages)
        } catch(e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params
            const message = await messageService.delete(id)
            return res.json(message)
        } catch(e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const message = await messageService.getOne(id)
            return res.json(message)
        } catch(e) {
            next(e)
        }
    }

    async getByUser(req, res, next) {
        try {
            const {id} = req.params
            const messages = await messageService.getByUser(id)
            return res.json(messages)
        } catch(e) {
            next(e)
        }
    }

    async getByChat(req, res, next) {
        try {
            const {id} = req.params
            const chats = await messageService.getByChat(id)
            return res.json(chats)
        } catch(e) {
            next(e)
        }
    }
}

export default new MessageController()