import React from "react";
import './Chat.css'
import Message from "./Message/Message";
class Chat extends React.Component{
    renderMessages(){
        return this.props.chat.messages.map(message=>{
            return (
                <Message message={message}/>
            )
        });
    }
    render() {
        return (
            <div className={"chat-container"}>
                <div className={"main-message-container"}>
                    <div className={"main-message-header"}>
                        <p className={"main-message-header-text"}>{this.props.chat.header}</p>
                    </div>
                    <div className={"main-message-body"}>
                        <p className={"main-message-body-text"}>
                            {this.props.chat.text}
                        </p>
                    </div>
                </div>
                <div className={"messages-container"}>
                    {this.renderMessages()}
                </div>
            </div>
        )
    }
}
export default Chat;
