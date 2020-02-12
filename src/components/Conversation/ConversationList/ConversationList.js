import React from 'react';
import { ConversationCard } from '../ConversationCard/ConversationCard';
import Classes from './ConversationList.module.css';

export const ConversationList = (props) => {
    console.log(props.data);
    const data = props.data;
    const conversations = data.length > 0 ?
        data.map((conversation) => <ConversationCard key={conversation.id} data={conversation}  />) : null;
    return (
        <div className={Classes.ConversationCardList}>
            {conversations}
        </div>
    )
};
