import React from "react";
import './Message.css';
class Message extends React.Component{
    render() {
        return (
            <div className={"message-container"}>
                <p className={"message-text"}>
                    {this.props.message.text}
                </p>
            </div>
        );
    }
}
export default Message;
