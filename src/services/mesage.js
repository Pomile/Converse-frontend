import uuid from "uuid/v1";


export class MessagesService {
    constructor(messages, users) {
        this.messages = messages;
        this.users = users;
    }

    /**
     * Gets up-to-date list of messages by conversationId
     * @param conversationId
     */
    async getMessages(conversationId) {
        const messagesCopy = [...this.messages];
        const userCopy = [...this.users];
        const conversationMsg = messagesCopy
            .filter((msg) => msg.conversationId === conversationId);
        
        if (conversationMsg.length !== 0) {
            const msgDetail = conversationMsg.map((msg) => {
                const user = userCopy.find((user) => user.id === msg.userId);
                if (user !== -1) {
                    msg.user = user;
                    return msg;
                }
                return null
            }).filter((message) => message !==null);

            return msgDetail;
        }
    }

    /**
     * Saves message if it has id, adds new one with new id otherwise
     * @param message
     */
    async saveMessage(message) {
        const index = this.messages.findIndex(({ id }) => message.id === id);
        if (index === -1) {
            message.id = uuid();
            this.messages.push(message);
        } else {
            this.messages.splice(index, 1, message);
        }
        return message;
    }
}
