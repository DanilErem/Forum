import ApiError from "../exceptions/apiError.js"
import Message from "../models/Message.js";

class ChatService {
    async create(owner, text, chat_id) {
        const message = new Message({owner, text, chat: chat_id})
        await message.save()

        return message;
    }

    async delete(message_id) {
        const message = await Message.findByIdAndDelete(message_id).populate('chat').populate('owner')
        if (!message) {
            throw ApiError.BadRequest(`Message by id: ${message_id} not found`)
        }
        return message
    }

    async getOne(message_id) {
        const message = await Message.findById(message_id).populate('chat').populate('owner')
        if (!message) {
            throw ApiError.BadRequest(`Message by id: ${message_id} not found`)
        }
        return message
    }

    async getAll() {
        const messages = Message.find({}).populate('chat').populate('owner')
        return messages
    }

    async getByUser(user_id) {
        const messages = await Message.find({owner: user_id}).populate('chat').populate('owner')
        if (!messages) {
            throw ApiError.BadRequest(`Chats by user id: ${user_id} not found`)
        }
        return messages
    }

    async getByChat(chat_id) {
        const messages = await Message.find({chat: chat_id}).populate('chat').populate('owner')
        if (!messages) {
            throw ApiError.BadRequest(`Chats by user id: ${chat_id} not found`)
        }
        return messages
    }
}

export default new ChatService()