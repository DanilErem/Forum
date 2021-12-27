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
            messages: [

            ],
            id : 1,
        }
    ]
};
export function getCurrentChat(id){
    for (let chat of chatsPage.chats){
        if (chat.id === id){
            return chat;
        }
    }
}
const CHANGE_SITE = "CHANGE_SITE";
export function chatsReducer(state = chatsPage, action) {
    switch (action.type) {
        case CHANGE_SITE:
            return state;
        default:
            return state;
    }
}
