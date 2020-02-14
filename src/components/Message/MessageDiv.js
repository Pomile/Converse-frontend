import React from 'react';
import { Conversation } from './Conversation/Conversation';
import { MessageList } from './MessageList/MessageList';
import Classes from './MessageDiv.module.css';

export const MessageDiv = (props) => {
    return (
        <div className={Classes.Message}>
            <h6 className={Classes.Message__Header}>Whatsapp for Business. Don't forget to start your free trial</h6>
            {props.conversation ? <div>
                <Conversation data={props.conversation} />
                <MessageList messages={props.messages} userId={props.userId} getComments={props.getComments}/>
                <form>
                    <textarea></textarea>
                </form>
            </div>: <h6>Please select a topic in the left pane. </h6>}
            
           
        </div>
    );
}
