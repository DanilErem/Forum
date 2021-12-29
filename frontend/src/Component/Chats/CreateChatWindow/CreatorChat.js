import React, {createRef} from "react";
import './CreatorChat.css';
import {
    createAddChatAction,
    createChangeRegimeAction,
    createChangeTextAction,
    VIEW_REGIME
} from "../../../store/chats-reducer";
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
    onButtonClick(){
        let action = createAddChatAction(this.textArea.current.value);
        this.props.dispatch(action);
    }
    close(){
        let action = createChangeRegimeAction(VIEW_REGIME);
        this.props.dispatch(action);
    }

    render() {

        return (
            <div>
                <div className={"creator-chat-background"}/>

                <div className={"creator-chat-container"}>
                    <button className={"close-button"} onClick={this.close.bind(this)}/>
                    <textarea ref={this.textArea} onChange={this.onTextEnter.bind(this)} value={this.props.chatCreator.text} className={"creator-chat-input"}/>
                    <button onClick={this.onButtonClick.bind(this)} className={"complete-post"}>

                    </button>

                </div>
            </div>

        )
    }
}

export default CreatorChat;
