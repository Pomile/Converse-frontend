import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Main } from '../components/Main/Main';
import { ConversationDiv } from '../components/Conversation/Conversation';

export class Conversation extends React.Component{
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
    getConversations = (status) => {
        this.setState({ status });
        this.services
            .conversations
            .getConversationsByStatus(status)
            .then((conver) => {
                this.setState((props, state) => ({ conversations: conver }))
            });
    }
    
    /**
     * get a conversation
     */
    
    /**
     * get all messages by conversation id
     * @param conversationId
     */
    getConversation = (id) => {
        this.services
            .conversations
            .getConversation(id).then((conversation) => {
                this.setState({ conversation });
            });
    }

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
        return (
            <Main>
                <Row bg={"primary"}>
                    <Col sm={"12"}>
                        <h4 className={"pl-3 pt-2 pb-2 border border-left-0 border-right-0"}>Conversation</h4>
                    </Col>
                </Row>
                <Row className="no-gutter">
                    <Col lg="4">
                        <ConversationDiv status={this.state.status} data={this.state.conversations} getConversations={this.getConversations} />
                    </Col>
                    <Col lg="8">
                        <Row></Row>
                        <Row >
                            <Col lg="8">messages</Col>
                            <Col lg="4">comments</Col>
                        </Row>
                    </Col>
                </Row>
            </Main>
        )
    }

}


export default Conversation;