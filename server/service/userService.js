import UserModel from "../models/UserModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserDto from "../dtos/UserDto.js"

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error(`User with this email: "${email}" already exist!`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await UserModel.create({email, password: hashPassword})

        const userDto = new UserDto(user)
        const token = jwt.sign({...userDto}, proces.env.JWT_SECRET_KEY, {expiresIn: '1h'})

        return token;
    }

    async login(email, password) {
        const user = await UserModel.findOne({email})
        if (!user) {
            throw new Error(`User by email: "${email}" not found`)
        }
        const hashPassword = bcrypt.hash(password, 3)
        if (!bcrypt.compareSync(hashPassword, user.password)) {
            throw new Error(`Incorect password`)
        }

        const userDto = new UserDto(user)
        const token = jwt.sign({...userDto}, proces.env.JWT_SECRET_KEY, {expiresIn: '1h'})

        return token;
    }
}

export default new UserService()