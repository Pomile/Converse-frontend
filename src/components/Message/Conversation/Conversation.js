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
                    <button className={Classes.Conversation__Reply} onClick={() => props.gotoElement("#message")}>
                        <span>
                            <input type={"image"} src={img} alt={"Reply"} />
                        </span>
                        Reply this conversation
                </button>
                </div>
                <blockquote className={Classes.Conversation__Content}>
                   {props.data.content}
               </blockquote>
                <div className={Classes.Conversation__DateTime}>{props.data.dateTime}</div>
            </div>
           
        </div>
    );
}
