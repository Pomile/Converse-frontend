import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Main } from '../components/Main/Main';
import { ConversationDiv } from '../components/Conversation/Conversation';
import { Toolbox } from '../components/Toolbox/Toolbox';
import { MessageDiv } from '../components/Message/MessageDiv';
import { CommentDiv } from '../components/Comment/CommentDiv';

export class Conversation extends React.Component{
    constructor(props) {
        super(props);

        // Services Object
        this.services = this.props.services;
        this.state = {
            status: 'open',
            messages: [],
            conversations: [],
            userId: 1,
            conversation: null,
            messageId: null,
            message: '',
            comments: [],
            comment: ''
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
     * get all conversations handler
     * 
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
     * get all messages by conversation id
     * @param id
    */
    getConversation = (id) => {
        this.services
            .conversations
            .getConversationsById(id).then((conversation) => {
                this.setState({ conversation });
                this.getMessages(id);
            });
        
    }

    /**
     * get all messages by conversation Id
     * @param conversationId
     */
    getMessages = (conversationId) => {
        this.services
            .messages.getMessages(conversationId)
            .then((messages) => {
                this.setState({ messages })
            });
    }

    /**
     * Save a message handler
     * @param event
     * @param message
     */
    saveMesssage = (event, message) => {
        if (event.charCode === 13 && message.trim() !== '') {
            const conversation = { ...this.state.conversation };
            const conversationId = conversation.id;
            const userId = this.state.userId;
            const obj = { userId, conversationId, content: message.trim()  }
            this.services
                .messages
                .saveMessage(obj)
                .then(() => {
                    this.setState({ message: '' });
                    this.getMessages(conversationId);
                });
        }
        
    }

    /**
    * Handle input change
    * @param event
    */
    onChange = event => {
       
        const target = event.target;
        const name = target.name;
        
        this.setState((state, props) => ({
        
                [name]: target.value
        }));
    }
    /** 
     * Post a comment
     * @param event
     * @param comment
    */
    postComment = (event, comment) => {
        event.preventDefault();
        const messageId = this.state.messageId;
        if (comment.trim() !== '' && messageId !== null) {
            const userId = this.state.userId;
            const obj = { userId, messageId, content: comment.trim()  }
            this.services
                .comments
                .saveComment(obj)
                .then(() => {
                    this.setState({ comment: '' });
                    this.getComments(messageId);
                });
        }
        
    }
    
    /**
     * get all comment by messageId
     * @param messageId
     */
    getComments = (messageId) => {
        this.services
            .comments
            .getComments(messageId)
            .then((comments) => {
                this.setState({ comments, messageId })

            })
    }

    gotoElement = (id) => {
        window.location.href = `${id}`;
    }

    render() {
        return (
            <Main>
                <Row bg={"primary"}>
                    <Col sm={"12"}>
                        <h4
                            className={"pl-3 pt-2 pb-2 border border-left-0 border-right-0"}>
                            Conversation
                        </h4>
                    </Col>
                </Row>
                <Row className="no-gutter">
                    <Col className="no-gutter pr-0" lg="3">
                        <ConversationDiv
                            status={this.state.status} data={this.state.conversations} getConversations={this.getConversations}
                            getConversation = {this.getConversation}
                        />
                    </Col>
                    <Col className="no-gutter pt-0" lg="9">
                        <Row className="no-gutter pt-0"><Toolbox /></Row>
                        <Row className="no-gutter">
                            <Col className="no-gutter pr-0 " lg="8">
                                
                                <MessageDiv
                                    conversation={this.state.conversation}
                                    messages={this.state.messages}
                                    userId={this.state.userId}
                                    getComments={this.getComments}
                                    onChange={this.onChange}
                                    saveMessage={this.saveMesssage}
                                    message={this.state.message}
                                    gotoElement = {this.gotoElement}
                                />
                            </Col>
                            <Col className="no-gutter pl-0 " lg="4">
                                <CommentDiv
                                    comments={this.state.comments}
                                    postComment={this.postComment}
                                    comment={this.state.comment}
                                    onChange={this.onChange}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Main>
        )
    }

}


export default Conversation;