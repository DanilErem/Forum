let userState = {
    users : [
        {
            email : "orlan@gmail.com",
            password : "20061010p",
        }
    ]
}
const ADD_USER_ACTION = "ADD_USER";
export function userReducer(state=userState, action){
    switch (action.type) {
        case ADD_USER_ACTION:
            return state;
        default:
            return state;
    }
}
