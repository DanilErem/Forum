let chatsPage = {
    chats : [
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
                "\n"
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
                "\n"
        }
    ]
};
const CHANGE_SITE = "CHANGE_SITE";
export function chatsReducer(state = chatsPage, action) {
    switch (action.type) {
        case CHANGE_SITE:
            return state;
        default:
            return state;
    }
}
