import React from "react";
import './Chats.css'
class Chats extends React.Component{
    renderChatLink(chat){
        return (
            <div className={"chat-container"}>
                <div className={"chat-header"}>
                    <p>{chat.header}</p>
                </div>
            </div>
        )
    }
    renderChatLinks(){
        return this.props.chatePage.chats.map((chat)=>{
            return this.renderChatLink(chat);
        });
    }
    render() {
        return (
            <div className={"chats-container"}>
                {this.renderChatLinks()}
            </div>
        );
    }
}
export default Chats;
