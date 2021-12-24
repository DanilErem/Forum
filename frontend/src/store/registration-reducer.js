let registrationPage = {
    nicknameInputText : "",
    passwordInputText : "",
    inputAttitude : "password",
    passwordHideSrc : "image/regestration/hide.svg"
}
const CHANGE_NICKNAME_INPUT_TEXT_ACTION = "CHANGE_NICKNAME_INPUT_TEXT";
const CHANGE_PASSWORD_INPUT_ACTION =  "CHANGE_PASSWORD_INPUT";
const CHANGE_VISIBLE_ACTION = "CHANGE_VISIBLE";
export function registrationReducer(state=registrationPage, action) {

    switch (action.type) {
        case CHANGE_NICKNAME_INPUT_TEXT_ACTION:
            state.nicknameInputText = action.newText;
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
        default:
            return  state;
    }
}
export function createNickNameChangeTextAction(newText) {
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
