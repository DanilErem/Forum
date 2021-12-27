import React from "react";
import './Chats.css'
import {useNavigate} from "react-router-dom";

function Chats (props){
    let navigate = useNavigate();


    function renderChatLink(chat){
        function onClick() {
            navigate(`/chats/${chat.id}`)
        }
        return (
            <div  onClick={onClick} className={"chat-link-container"}>
                <div className={"chat-link-header"}>
                    <p>{chat.header}</p>
                </div>
            </div>
        )
    }
    function renderChatLinks(){
        return props.chatPage.chats.map((chat)=>{
            return renderChatLink(chat);
        });
    }

        return (
            <div className={"chats-container"}>
                {renderChatLinks()}
            </div>
        );

}
export default (Chats);
