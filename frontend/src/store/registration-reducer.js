let registrationPage = {
    nicknameInputText : "",
    passwordInputText : "",
}
const CHANGE_NICKNAME_INPUT_TEXT_ACTION = "CHANGE_NICKNAME_INPUT_TEXT";
const CHANGE_PASSWORD_INPUT_ACTION =  "CHANGE_PASSWORD_INPUT";
export function registrationReducer(state=registrationPage, action) {
    debugger;
    switch (action.type) {
        case CHANGE_NICKNAME_INPUT_TEXT_ACTION:
            state.nicknameInputText = action.newText;
            return state;
        case CHANGE_PASSWORD_INPUT_ACTION:
            state.passwordInputText = action.newText;
            return state;
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
