import React from 'react';
import alex from '../../../../assets/images/alex.jpg';
import somto from '../../../../assets/images/somto.jpg';
import maria from '../../../../assets/images/maria.jpg';
import Classes from './Comment.module.css';

export const Comment = (props) => {
    const { content, user } = props.data;
    const username = `${user.firstname} ${user.lastname}`
    let img;
    if (user.image === "alex.jpg") {
        img =alex
    } else if (user.image === "somto.jpg") {
        img = somto
    } else {
        img = maria
    }
    return (
        <div className={Classes.Comment} >
            <div className={Classes.Comment__UserImage}>
                <img src={img} alt={"A"} />
            </div>
            <div>
                <div className={""}>{username}</div>
                <div className={Classes.Comment__Content}>
                    {content}
                </div>
            </div>
            
        </div>
    );
};
