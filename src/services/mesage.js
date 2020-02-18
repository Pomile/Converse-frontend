import uuid from "uuid/v1";

/**
 * @class MessageService
 */
export class MessagesService {
    /**
     * Constructor method
     * @param {array} messages 
     * @param {array} users 
     */
    constructor(messages, users) {
        this.messages = messages;
        this.users = users;
    }

    /**
     * Gets up-to-date list of messages by conversationId
     * @param conversationId
     * @returns {array} conversations
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
            }).filter((message) => message !== null);
            
            return msgDetail;
        }
        return [];
    }

    /**
     * Saves a message
     * @param {object} message
     * @return {object} message
     */
    async saveMessage(message) {
        const index = this.messages.findIndex(({ id }) => message.id === id);
        if (index === -1) {
            message.id = uuid();
            const date = new Date();
            message.dateTime = date.toLocaleTimeString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                time: 'numeric'
            });
            this.messages.push(message);
        } else {
            this.messages.splice(index, 1, message);
        }
        return message;
    }
}
