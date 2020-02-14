import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Classes from './Message.module.css';


export const Message = (props) => {
    const { firstname, lastname, id } = props.data.user;
    const username = `${firstname} ${lastname}`;
    const contentStyle = id !== props.viewerId ? [Classes.Message__Content_Receive, Classes.Message__Content].join(' ') : [Classes.Message__Content_Sent, Classes.Message__Content].join(' ');
    return (
        <div className={Classes.Message} onClick={() => props.getComments(props.data.id)}>
                <div className={Classes.Message__Header}>
                <div className={Classes.Message__Owner}>{username}</div>
                </div>
                <blockquote className={contentStyle}>
                    {props.data.content}
               </blockquote>
                <div className={Classes.Message__info}>
                <div className={Classes.Message__DateTime}>{props.data.dateTime}</div>
                <span className={Classes.Message__Double_Check_Mark}><FontAwesomeIcon icon={["fa", "check-double"]} /></span>
                </div>
            </div>
    )
};
