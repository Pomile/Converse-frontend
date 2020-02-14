import React from 'react';
import { ConversationCard } from '../ConversationCard/ConversationCard';
import Classes from './ConversationList.module.css';

export const ConversationList = (props) => {
    const data = props.data;
    const conversations = data.length > 0 ?
        data.map((conversation) => <ConversationCard key={conversation.id} data={conversation} getConversation={props.getConversation} />) : null;
    return (
        <div className={Classes.ConversationCardList}>
            {conversations}
        </div>
    )
};
