import chatService from "../service/chatService.js";

class ChatController {

    async create(req, res, next) {
        try {
            const {title, owner} = req.body;
            const chat = await chatService.create(owner, title)
            return res.json(chat)
        } catch(e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const chats = await chatService.getAll()
            return res.json(chats)
        } catch(e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params
            const chat = await hatService.delete(id)
            return res.json(chat)
        } catch(e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const chat = await chatService.getOne(id)
            return res.json(chat)
        } catch(e) {
            next(e)
        }
    }

    async getByUser(req, res, next) {
        try {
            const {id} = req.params
            const chats = await chatService.getByUser(id)
            return res.json(chats)
        } catch(e) {
            next(e)
        }
    }
}

export default new ChatController()