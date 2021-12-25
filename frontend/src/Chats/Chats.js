import React from "react";
import './Chats.css'
import Chat from "./Chat/Chat";
class Chats extends React.Component{
    render() {
        return (
            <div className={"chats-container"}>
                <Chat/>
            </div>
        );
    }
}
export default Chats;
