import {login, registration} from "./http/UserApi";
const CHANGE_NICKNAME_INPUT_TEXT_ACTION = "CHANGE_NICKNAME_INPUT_TEXT";
const CHANGE_PASSWORD_INPUT_ACTION =  "CHANGE_PASSWORD_INPUT";
const CHANGE_VISIBLE_ACTION = "CHANGE_VISIBLE";
const REGISTRATION_COMPLETE_ACTION = "REGISTRATION_COMPLETE_ACTION";
const CHANGE_REGISTRATION_REGIME_ACTION = "CHANGE_REGIME";
export const LOGIN_REGIME = "LOGIN";
export const REGISTRATION_REGIME = "REGISTRATION";
let registrationPage = {
    emailInputText : "",
    passwordInputText : "",
    inputAttitude : "password",
    passwordHideSrc : "image/regestration/hide.svg",
    enterRegime : LOGIN_REGIME,
}
export function getLinkText(state){
    if (state.enterRegime === LOGIN_REGIME){
        return "Register";
    }
    else if (state.enterRegime === REGISTRATION_REGIME){
        return "Login";
    }
}
export function getButtonText(state) {
    if (state.enterRegime === REGISTRATION_REGIME){
        return "Register";
    }
    else if (state.enterRegime === LOGIN_REGIME){
        return "Login";
    }
}
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
            if (state.enterRegime === REGISTRATION_REGIME) {
                registration(action.email, action.password).then(r => {
                    console.log(r);
                });
            }
            else if (state.enterRegime === LOGIN_REGIME){
                login(action.email, action.password).then(r => {
                    console.log(r);
                });
            }
            return state;
        case CHANGE_REGISTRATION_REGIME_ACTION:
            if (state.enterRegime === LOGIN_REGIME){
                state.enterRegime = REGISTRATION_REGIME;
            }
            else if (state.enterRegime === REGISTRATION_REGIME){
                state.enterRegime = LOGIN_REGIME;
            }
            return state;

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
export function createChangeRegistrationRegime() {
    return {
        type : CHANGE_REGISTRATION_REGIME_ACTION,
    }

}

