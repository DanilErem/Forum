import React, {createRef} from "react";
import './Chat.css'
import Message from "./Message/Message";
import {createChangeMessageAction, createCreateMessageAction} from "../../../store/chats-reducer";
class Chat extends React.Component{
    constructor(props) {
        super(props);
        this.messageInput = createRef();
    }
    renderMessages(){
        return this.props.chat.messages.map(message=>{
            return (
                <Message message={message}/>
            )
        });
    }
    onChange(){
      let text = this.messageInput.current.value;
      let action = createChangeMessageAction(text, this.props.chat.id);
      this.props.dispatch(action);
    }
    createMessage(){
        let text = this.messageInput.current.value;
        let action = createCreateMessageAction(text, this.props.chat.id);
        this.props.dispatch(action);
    }
    onScroll(){
        debugger;
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
                <div className={"input-container"}>
                    <textarea onScroll={this.onScroll.bind(this)}  ref={this.messageInput} onChange={this.onChange.bind(this)} value={this.props.chat.newMessageInput}/>
                    <button onClick={this.createMessage.bind(this)}/>
                </div>
            </div>
        )
    }
}
export default Chat;
