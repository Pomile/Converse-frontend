import React from 'react';
import { Message } from './Message/Message';

export const MessageList = (props) => {

    const messages =props.messages !==null ? props.messages.map((message) => <Message
        key={message.id} data={ message } viewerId={props.userId} />) : null;
    return (
        <div> 
            {messages}
        </div>
    );
}