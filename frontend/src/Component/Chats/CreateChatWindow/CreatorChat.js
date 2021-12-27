import React, {createRef} from "react";
import './CreatorChat.css';
import {createChangeTextAction} from "../../../store/chats-reducer";
class CreatorChat extends React.Component{
    constructor(props) {
        super(props);
        this.textArea = createRef();
    }

    onTextEnter(){
        if (this.textArea.current !== null) {
            let action = createChangeTextAction(this.textArea.current.value);
            this.props.dispatch(action);
        }
    }

    render() {

        return (
            <div>
                <div className={"creator-chat-background"}/>
                <div className={"creator-chat-container"}>
                    <textarea ref={this.textArea} onChange={this.onTextEnter.bind(this)} value={this.props.chatCreator.text} className={"creator-chat-input"}/>
                    <button onClick={} className={"complete-post"}/>
                </div>
            </div>

        )
    }
}

export default CreatorChat;
