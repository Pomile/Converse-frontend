import React from 'react';
import Classes from './ConversationTab.module.css';

export const ConversationTab = (props) => {
    const pills = ['open', 'Snooze', 'Archive', 'Trash'].map((status, index) => {
        let style = [Classes.TabPills];
        if (props.status === status) {
            style.push(Classes.Active);
        }
        return (<li key={index} className={"nav-item"}>
           <button className={style.join(' ')} onClick={() => props.getConversations(status)}>{status}</button>
       </li>
       );
    });
    return (
        <ul className={["nav nav-pills", Classes.ConversationTab].join(' ')}>
           {pills}
        </ul>
    );
};
