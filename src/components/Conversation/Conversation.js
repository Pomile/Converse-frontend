import React from 'react';
import { ConversationTab } from './ConversationTab/ConversationTab';
import { ConversationList } from './ConversationList/ConversationList';
import Classes from './Conversation.module.css';

export const ConversationDiv = (props) => {
    return (
        <div className={Classes.Conversation}>
            <ConversationTab status={props.status} getConversations={props.getConversations} />
            <ConversationList data={props.data}/>
        </div>

    );
};
