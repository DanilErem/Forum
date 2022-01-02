import ApiError from "../exceptions/apiError.js"
import Chat from "../models/Chat.js"

class ChatService {
    async create(owner, title) {
        const chat = new Chat({title, owner})
        await chat.save()

        return chat;
    }

    async delete(chat_id) {
        const chat = await Chat.findByIdAndDelete(chat_id).populate('owner')
        if (!chat) {
            throw ApiError.BadRequest(`Chat by id: ${user} not found`)
        }
        return chat
    }

    async getOne(chat_id) {
        const chat = await Chat.findById(chat_id).populate('owner')
        if (!chat) {
            throw ApiError.BadRequest(`Chat by id: ${user} not found`).populate('owner')
        }
        return chat
    }

    async getAll() {
        const chats = await Chat.find({}).populate('owner')
        return chats
    }

    async getByUser(user_id) {
        const chats = await Chat.find({owner: user_id})
        if (!chats) {
            throw ApiError.BadRequest(`Chats by user id: ${user_id} not found`)
        }
        return chats
    }

}

export default new ChatService()