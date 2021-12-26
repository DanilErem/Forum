import mogoose from 'mongoose'
const {Schema, model} = mogoose;
const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},   
    role: {type: String, default: 'USER'}
})

export default model('User', UserSchema)