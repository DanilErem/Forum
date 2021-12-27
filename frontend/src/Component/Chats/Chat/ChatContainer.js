
import {useParams} from "react-router-dom";
import {getCurrentChat} from "../../../store/chats-reducer";
import Chat from "./Chat";
import React from "react";
function ChatContainer (props){
    let params = useParams();
    function renderCurrentChat(){
      let currentChat = getCurrentChat(parseInt(params.id, 10));
      if (currentChat !== undefined){
          return <Chat chat={currentChat} />
       }

    }

    return (
        <div >
            {renderCurrentChat()};
        </div>
    );


}
export default (ChatContainer);
