import React from 'react';
import { Comment } from './Comment/Comment';

export const CommentList = (props) => {
    const { comments } = props;
    const comm = comments.length > 0 ? comments.map((comment) => <Comment data={comment}
        key={comment.id}
    />): null;
    return (
        <div className={""}>
           {comm}
        </div>
    ); 
}