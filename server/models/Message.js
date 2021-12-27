import mogoose from 'mongoose'
const {Schema, model} = mogoose;
const MessageSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    chat: {type: Schema.Types.ObjectId, required: true, ref: 'Chat'},
    text: {required: true, type: String},
})

export default model('Message', MessageSchema)