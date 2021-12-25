import UserModel from "../models/UserModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserDto from "../dtos/UserDto.js"
import ApiError from "../exceptions/apiError.js"

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`User with this email: "${email}" already exist!`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await UserModel.create({email, password: hashPassword})

        const userDto = new UserDto(user)
        const token = jwt.sign({...userDto}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})

        return token;
    }

    async check(user) {
        const token = jwt.sign({...user}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})
        return token;
    }

    async login(email, password) {
        const user = await UserModel.findOne({email})
        if (!user) {
            throw ApiError.BadRequest(`User by email: "${email}" not found`)
        }
        if (!bcrypt.compareSync(password, user.password)) {
            throw ApiError.BadRequest(`Incorect password`)
        }

        const userDto = new UserDto(user)
        const token = jwt.sign({...userDto}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})

        return token;
    }
}

export default new UserService()