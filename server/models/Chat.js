import mogoose from 'mongoose'
const {Schema, model} = mogoose;
const ChatSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    title: {required: true, type: String},
})

export default model('Chat', ChatSchema)