
export class ConversationService {
    constructor(data, users) {
        this.conversations = data;
        this.users = users;
    }


    /**
     * Gets up-to-date list of conversations by status.
     * conversation status could be open, archived, snooze, or trash
     */
    async getConversationsByStatus(status) {
        const conversationsCopy = [...this.conversations];
        const usersCopy = [...this.users]
        const conversationsBySatus = conversationsCopy.filter((conversation) => conversation.status === status);
        if (conversationsBySatus.length > 0 ) {
            const conversationDetail = conversationsBySatus.map((conv) => {
                const user = usersCopy.find((u) => u.id === conv.userId);
                if (user !== -1) {
                    conv.user = user;
                    return conv;
                }
                return null;
            }).filter((conversation) => conversation !== null);
            return conversationDetail;
        }
        return;
    }

}
