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
            ]
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
        }
    ],
    chatCreator : {
        text : "",
    },
    regime : VIEW_REGIME,
};
const CHANGE_REGIME_ACTION = "CHANGE_STATE_ACTION";
const CHANGE_TEXT_ACTION = "CHANGE_TEXT";

export function getCurrentChat(id){
    for (let chat of chatsPage.chats){
        if (chat.id === id){
            return chat;
        }
    }
}

export function chatsReducer(state = chatsPage, action) {
    switch (action.type) {
        case CHANGE_REGIME_ACTION:
            state.regime = action.regime;
            return state;
        case CHANGE_TEXT_ACTION:
            state.chatCreator.text = action.newText;
            return  state;
        default:
            return state;
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
