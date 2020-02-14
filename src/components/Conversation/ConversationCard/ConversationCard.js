import React from 'react';
import Classes from './ConversationCard.module.css';
import tweeter from '../../../assets/images/social-icon.png';
import whatsapp from '../../../assets/images/whats-app-copy.png';
import apple from '../../../assets/images/apple-copy.png';
import attach from '../../../assets/images/attachment_2.png';



export const ConversationCard = (props) => {
    const { id, social, title, content, dateTime, attachment, unread } = props.data;
    const { firstname, lastname } = props.data.user;
    let x;
    if (social === 'tweeter') {
        x = tweeter;
    } else if (social === 'whatsapp') {
        x = whatsapp;
    } else {
        x = apple;
    }
    let badge ='';
    let icon;
    if (attachment) {
        icon = (<img src={attach} alt={"icon.png"} />);
    }
    if (unread > 0) {
        badge = (<div className={Classes.ConversationCard__Badge}>
            {unread}
        </div>)
    }
    const username = `${firstname} ${lastname}`
    return (
        <div className={Classes.ConversationCard} onClick={() => props.getConversation(id)}>
            <div className={Classes.ConversationCard__Social}>
                <img src={x} alt={"social.png"} />
            </div>
            <div className={Classes.ConversationCard__Content}>
                <div className={Classes.ConversationCard__Header}>
                    <div className={Classes.ConversationCard__Name}>
                        {username}
                    </div>
                    <div className={Classes.ConversationCard__DateTime}>
                        {dateTime} </div>
                </div>
                <div className={Classes.ConversationCard__Body}>
                    <div className={Classes.ConversationCard__Text}>
                        <div className={Classes.ConversationCard__Title}>{title}</div>
                        <p className={Classes.ConversationCard__Content}>{content}</p>
                    </div>
                    <div className={Classes.ConversationCard__ItemList}>
                        {badge}
                        <div className={Classes.ConversationCard__Icon}>
                           {icon}
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
};
