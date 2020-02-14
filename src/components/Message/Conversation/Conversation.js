import React from 'react';
import Classes from './Conversation.module.css';
import img from '../../../assets/images/16.png';

export const Conversation = (props) => {
    const { firstname, lastname } = props.data.user;
    const username = `${firstname} ${lastname}`;
    return (
        <div className={Classes.Conversation}>
            <div className={Classes.Conversation__body}>
                <div className={Classes.Conversation__Header}>
                    <div className={Classes.Conversation_Owner}>{username}</div>
                    <div className={Classes.Conversation__Reply}>
                        <span>
                            <input type={"image"} src={img} alt={"Reply"} />
                        </span>
                        Reply this conversation
                </div>
                </div>
                <blockquote className={Classes.Conversation__Content}>
                   {props.data.content}
               </blockquote>
                <div className={Classes.Conversation__DateTime}>{props.data.dateTime}</div>
            </div>
           
        </div>
    );
}
