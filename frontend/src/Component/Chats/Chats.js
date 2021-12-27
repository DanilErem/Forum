import React from "react";
import './Chats.css'
import {useNavigate} from "react-router-dom";
import {ADD_CHAT_REGIME, createChangeRegimeAction} from "../../store/chats-reducer";
import CreatorChat from "./CreateChatWindow/CreatorChat";

function Chats (props){
    let navigate = useNavigate();
    function createAddChatWindow() {
        let action = createChangeRegimeAction(ADD_CHAT_REGIME);
        props.dispatch(action);
    }
    function renderChatLink(chat){
        function onClick() {
            navigate(`/chats/${chat.id}`)
        }
        return (
                <div   className={"chat-link-container"}>
                    <div className={"chat-link-header"}>
                        <p onClick={onClick}>{chat.header}</p>
                    </div>
                </div>

        )
    }
    function renderChatLinks(){
        return props.chatPage.chats.map((chat)=>{
            return renderChatLink(chat);
        });
    }
    function renderChatCreator() {
        if (props.chatPage.regime === ADD_CHAT_REGIME) {
            return (<CreatorChat chatCreator={props.chatPage.chatCreator} dispatch={props.dispatch}/>)
        }
    }
    return (
        <div className={"chats-container"}>

            {renderChatLinks()}
            <button onClick={createAddChatWindow} className={"add-post-button"}/>
            {renderChatCreator()}
        </div>
    );

}
export default (Chats);
