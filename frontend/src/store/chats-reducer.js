

export const VIEW_REGIME = "VIEW";
export const ADD_CHAT_REGIME = "ADD_CHAT";
let chatsPage = {
    chats : [
        {
            header : "Когда на отработку?",
            text : "Извините, я очень хочу попасть на отработку, но увы я не знаю когда она. Можете пожалуйста сказать мне ?",
            id : 0,
            messages : [
                {
                    text : "На 9:30",
                }
            ],
            newMessageInput : "",
        },
        {
            header : "Сколько будет 2 * 2 ?",
            text : "",
            messages: [
                {
                    text : "ответ: блин, минимум 20 символов. если умножить\n" +
                        "\n" +
                        "(-2/3)^2\n" +
                        "\n" +
                        "4/9\n" +
                        "\n" +
                        "я не могу понять. 2 целые 1/3? или 2×1/3\n" +
                        "\n" +
                        "если 2 целые 1/3, то (-7/3)^2=49/9\n" +
                        "\n",
                }
            ],
            id : 1,
            newMessageInput : "",
        }
    ],
    chatCreator : {
        text : "",
    },
    regime : VIEW_REGIME,
};
const CHANGE_REGIME_ACTION = "CHANGE_STATE_ACTION";
const CHANGE_TEXT_ACTION = "CHANGE_TEXT";
const ADD_CHAT_ACTION = "ADD_CHAT_ACTION";
const CHANGE_MESSAGE_ACTION = "CHANGE_MESSAGE";
const CREATE_MESSAGE_ACTION = "CREATE_MESSAGE";

export function getChatById(id) {
    for (let chat of chatsPage.chats){
        if (chat.id === id){
            return chat;
        }
    }
}
function getFirstWord(string, wordCounter) {
    let newString = string.slice(0, wordCounter);
    newString += "...";
    return newString;
}

function changeRegime(action, state) {
    state.regime = action.regime;
    return state;
}
function changeText(action, state) {
    state.chatCreator.text = action.newText;
    return  state;
}
function addChat(action, state) {
    let header = getFirstWord(action.text, 30);
    let newChat  = {
        header : header,
        text : action.text,
        id : state.chats.length,
        messages : [],
        newMessageInput : "",

    }
    state.chatCreator.text = "";
    state.regime = VIEW_REGIME;
    state.chats.push(newChat);
    return state;
}
function changeMessage(action, state) {
    let chat = getChatById(action.chatId);
    chat.newMessageInput = action.message;
    return state;
}
function createMessage(action, state) {
    let text = action.text;
    let chat = getChatById(action.chatId);
    chat.messages.push({
        text  : text,
    });
    chat.newMessageInput = "";

    return state;
}

export function chatsReducer(state = chatsPage, action) {
    switch (action.type) {
        case CHANGE_REGIME_ACTION:
            return changeRegime(action, state);
        case CHANGE_TEXT_ACTION:
            return changeText(action, state)
        case ADD_CHAT_ACTION:
            return addChat(action, state);
        case CHANGE_MESSAGE_ACTION:
            return changeMessage(action, state)
        case CREATE_MESSAGE_ACTION:
            return createMessage(action, state);
        default:
            return state;
    }
}
export function createAddChatAction(text) {
    return {
        type : ADD_CHAT_ACTION,
        text : text,
    }
}
export function createChangeRegimeAction(REGIME) {
    return {
        regime : REGIME,
        type : CHANGE_REGIME_ACTION,
    }
}
export function createChangeTextAction(newText) {
    return {
        type : CHANGE_TEXT_ACTION,
        newText :  newText,
    }
}
export function createChangeMessageAction(message, chatId) {
    return {
        type : CHANGE_MESSAGE_ACTION,
        message : message,
        chatId : chatId,
    }
}
export  function createCreateMessageAction(text, chatId){
    return {
        type : CREATE_MESSAGE_ACTION,
        text : text,
        chatId : chatId,
    }
}


