
import {useParams} from "react-router-dom";
import {getChatById} from "../../../store/chats-reducer";
import Chat from "./Chat";
import React from "react";
function ChatContainer (props){
    let params = useParams();
    function renderCurrentChat(){
      let currentChat = getChatById(parseInt(params.id, 10));
      if (currentChat !== undefined){
          return <Chat dispatch={props.dispatch} chat={currentChat} />
       }

    }

    return (
        <div >
            {renderCurrentChat()};
        </div>
    );


}
export default (ChatContainer);
