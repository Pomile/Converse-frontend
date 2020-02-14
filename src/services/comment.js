import uuid from "uuid/v1";


export class CommentsService {
    constructor(comments, users) {
        this.comments = comments;
        this.users = users;
    }

    /**
     * Gets up-to-date list of comments by messageId
     * @param messageId
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
     * Saves comment if it has id, adds new one with new id otherwise
     * @param comment
     */
    async saveMessage(comment) {
        const index = this.comments.findIndex(({ id }) => comment.id === id);
        if (index === -1) {
            comment.id = uuid();
            this.messages.push(comment);
        } else {
            this.comments.splice(index, 1, comment);
        }
        return comment;
    }
}
