import {registration} from "./http/UserApi";

let registrationPage = {
    emailInputText : "",
    passwordInputText : "",
    inputAttitude : "password",
    passwordHideSrc : "image/regestration/hide.svg"
}
const CHANGE_NICKNAME_INPUT_TEXT_ACTION = "CHANGE_NICKNAME_INPUT_TEXT";
const CHANGE_PASSWORD_INPUT_ACTION =  "CHANGE_PASSWORD_INPUT";
const CHANGE_VISIBLE_ACTION = "CHANGE_VISIBLE";
const REGISTRATION_COMPLETE_ACTION = "REGISTRATION_COMPLETE_ACTION";
export function registrationReducer(state=registrationPage, action) {

    switch (action.type) {
        case CHANGE_NICKNAME_INPUT_TEXT_ACTION:
            state.emailInputText = action.newText;
            return state;
        case CHANGE_PASSWORD_INPUT_ACTION:
            state.passwordInputText = action.newText;
            return state;
        case CHANGE_VISIBLE_ACTION:
            if (state.inputAttitude === "password"){
                state.inputAttitude = "text";
                state.passwordHideSrc = "image/regestration/visible.svg";
            }
            else if (state.inputAttitude === "text"){
                state.inputAttitude = "password";
                state.passwordHideSrc = "image/regestration/hide.svg";
            }
            return state;
        case REGISTRATION_COMPLETE_ACTION:
            registration(action.email, action.password).then(r => {});

        default:
            return  state;
    }
}
export function createEmailChangeTextAction(newText) {
    return {
        type : CHANGE_NICKNAME_INPUT_TEXT_ACTION,
        newText : newText,
    }
}
export function createPasswordChangeAction(newPassword) {
    return {
        type : CHANGE_PASSWORD_INPUT_ACTION,
        newText : newPassword,
    }
}
export function createChangeVisibleAction() {
    return {
        type : CHANGE_VISIBLE_ACTION,

    }
}
export function createRegistrationAction(email, password) {
    return {
        type : REGISTRATION_COMPLETE_ACTION,
        email : email,
        password : password,
    }
}
