import {create, getAll} from "./http/ChatsApi";

export const VIEW_REGIME = "VIEW";
export const ADD_CHAT_REGIME = "ADD_CHAT";
let chatsPage = {
    chats : [

    ],
    chatCreator : {
        text : "",
    },
    isLoad : false,
    regime : VIEW_REGIME,
};
const CHANGE_REGIME_ACTION = "CHANGE_STATE_ACTION";
const CHANGE_TEXT_ACTION = "CHANGE_TEXT";
const ADD_CHAT_ACTION = "ADD_CHAT_ACTION";
const CHANGE_MESSAGE_ACTION = "CHANGE_MESSAGE";
const CREATE_MESSAGE_ACTION = "CREATE_MESSAGE";
const LOAD_CHATS_ACTION = "LOAD_CHATS";


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
    create(header, {
        email: "gleb98808@@gmail.com",
        password: "20061010p",
    }).then(r =>{
        console.log(r);
    });
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
function loadChats(action, state) {
            getAll().then(r => {
                state.chats = [];
                for (let chat of r) {
                    chat.text = "";
                    chat.header = chat.title;
                    chat.messages = [];
                    chat.newMessageInput = "";
                    state.chats.push(chat);
                }
            }).catch(err => {
                console.log(err);
            });


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
        case LOAD_CHATS_ACTION:
            return loadChats(action, state);
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
export function createLoadChatsAction() {
    return {
        type : LOAD_CHATS_ACTION,
    }
}
