import React from 'react';
import { CommentList } from './CommentList/CommentList';
import Classes from './Comment.module.css';
import alex from '../../assets/images/alex.jpg';

export const CommentDiv = (props) => {
    return (
        <div className={Classes.Comment}>
            <h6 className={"pt-2 pl-2 pb-3"}>Comments</h6>
            <CommentList comments={props.comments}/>
            <form className={Classes.Comment__form} >
                <div className={Classes.Comment__InputBase}>
                    <img src={alex} alt={"A"} />
                    <input type={"text"} name={"comment"} id={"comment"} className={Classes.Comment__input}/>
                    <button type={"button"} className={Classes.Comment__InputButtion}>A</button>
                </div>
            </form>
        </div>
    )
};
