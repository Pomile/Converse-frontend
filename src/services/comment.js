import uuid from "uuid/v1";

/**
 * @class CommentService
 */
export class CommentsService {
    /**
     * 
     * @param {array} comments 
     * @param {array} users 
     */
    constructor(comments, users) {
        this.comments = comments;
        this.users = users;
    }

    /**
     * Gets up-to-date list of comments by messageId
     * @param messageId
     * @returns {object}
     */
    async getComments(messageId) {
        
        const commentsCopy = [...this.comments];
        const userCopy = [...this.users];
        const msgComments = commentsCopy
            .filter((comment) => comment.messageId === messageId);
        if (msgComments.length !== 0) {
            const commentsDetail = msgComments.map((comment) => {
                const user = userCopy.find((user) => user.id === comment.userId);
                if (user) {
                    comment.user = user;
                    return comment;
                }
                return null
            }).filter((comment) => comment !== null);

            return commentsDetail;
        }
        return [];
    }

    /**
     * Saves comment
     * @param {object} comment
     * @returns {object}
     */
    async saveComment(comment) {
        const index = this.comments.findIndex(({ id }) => comment.id === id);
        if (index === -1) {
            comment.id = uuid();
            console.log(comment);
            this.comments.push(comment);
        } else {
            this.comments.splice(index, 1, comment);
        }
        return comment;
    }
}
