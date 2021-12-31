export default class UserDto {
    email;
    id;
    role;
    constructor(model) {
        this.email = model.email
        this.id = model._id
        if (model.id) {
            this.id = model.id
        }
        this.role = model.role
    }
}