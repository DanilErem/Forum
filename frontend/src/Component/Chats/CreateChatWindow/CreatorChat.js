import React from "react";
import './CreatorChat.css';
class CreatorChat extends React.Component{
    render() {

        return (
            <div>
                < div className={"creator-chat-background"}/>
                <div className={"creator-chat-container"}>
                    <textarea value={this.props.chatCreator.text} className={"creator-chat-input"}/>
                </div>
            </div>

        )
    }
}

export default CreatorChat;
