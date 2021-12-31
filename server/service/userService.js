import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserDto from "../dtos/UserDto.js"
import ApiError from "../exceptions/apiError.js"

class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`User with this email: ${email} already exist!`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = new User({email, password: hashPassword})
        await user.save();

        const userDto = new UserDto(user)
        const token = jwt.sign({...userDto}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})

        return token;
    }

    async check(user) {
        const userDto = new UserDto(user)
        const token = jwt.sign({...userDto}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})
        return token;
    }

    async getAll() {
        const users = await User.find({})
        return users
    }

    async getOne(user_id) {
        const user = await User.findById(user_id)
        if (!user) {
            throw ApiError.BadRequest(`User with this id: ${user_id} already exist!`)
        }
        return user
    }

    async login(email, password) {
        const user = await User.findOne({email})
        if (!user) {
            throw ApiError.BadRequest(`User by email: ${email} not found`)
        }
        if (!bcrypt.compareSync(password, user.password)) {
            throw ApiError.BadRequest(`Incorect password`)
        }

        const userDto = new UserDto(user)
        const token = jwt.sign({...userDto}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})

        return token;
    }

    async delete(user_id) {
        const user = await User.findByIdAndDelete(user_id)
        if (!user) {
            throw ApiError.BadRequest(`User by id: ${user} not found`)
        }
    
        return user;
    }
}

export default new UserService()