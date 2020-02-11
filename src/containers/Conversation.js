import React from 'react'

class Conversation extends React.Component{
    constructor(props) {
        super(props);

        // Posts Service Object
        this.services = this.props.services;
        this.state = {
            status: 'open',
            messages: [],
            conversations: [],
            userId: 1,
            conversation: null,
            messageId: null,
            message: null,
            comments: [],
            comment: null
        }

    }
    
    componentDidMount() {
        // console.log("[ComponentDidMount]Conversation.js");
        this.getConversations(this.state.status);
    }

    componentDidUpdate() {
        // console.log("[ComponentDidUpdate]Conversation.js");
    }

    /* 
        get all conversations handler
    */
    getConversations(status) {
        this.services
            .conversations
            .getConversationsByStatus(status)
            .then((conversations) => {
                this.setState({ conversations })
            });
    }
    
    /**
     * get a conversation
     */
    
    /**
     * get all messages by conversation id
     * @param conversationId
     */

    /**
     * get a message
     */

    /**
     * Save a message handler
     */

    /** 
     * Save a comment
    */
    
    /**
     * get all comment by messageId
     * @param messageId
     */

    render() {
        return <h1>Conversation buildUp...</h1>
    }

}


export default Conversation;