import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Main } from '../components/Main/Main';
import { ConversationDiv } from '../components/Conversation/Conversation';
import { Toolbox } from '../components/Toolbox/Toolbox';
import { MessageDiv } from '../components/Message/MessageDiv';
import { CommentDiv } from '../components/Comment/CommentDiv';
import { ToggleComponent } from '../components/ToggleComponent/ToggleComponent';
import { toggleComponent } from '../shared/toggleComponent';

export class Conversation extends React.Component{
    constructor(props) {
        super(props);

        // Services Object
        this.services = this.props.services;
        // window viewport
        this.width = window.visualViewport.width;
        // state property
        this.state = {
            status: 'open',
            messages: [],
            conversations: [],
            userId: 1,
            conversation: null,
            messageId: null,
            message: '',
            comments: [],
            comment: '',
            display: {
                conversation: true,
                messages: true,
                comments: true
            }
        }

    }
    componentWillMount() {
        const display = { ...this.state.display }
        const smallDeviceViewPort = (this.width >= 576 && this.width <= 768)
            || (this.width >= 300 && this.width <= 576);

        if (smallDeviceViewPort) {

            display.conversation = true;
            display.messages = false;
            display.comments = false;
            this.setState({ display });
        }
    }

    componentDidMount() {
        
        this.getConversations(this.state.status);
    }

    /**
     * get all conversations handler
     * @param status
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
     * get a conversation
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
        if ((this.width >= 576 && this.width <= 768)
            || (this.width >= 300 && this.width <= 576)) {
            const display = { ...this.state.display }
            display.conversation = false;
            display.messages = true;
            display.comments = false;
            this.setState({ display });
        }
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

            });
        const display = { ...this.state.display }
        if ((this.width >= 576 && this.width <= 768)
            || (this.width >= 300 && this.width <= 576)) {
            
            display.conversation = false;
            display.messages = false;
            display.comments = true;
            this.setState({ display });
        } else {

            display.conversation = true;
            display.messages = true;
            display.comments = true;
            this.setState({ display });
        }
    }

    /**
     * Goto a block element by id
     */
    gotoElement = (id) => {
        window.location.href = `${id}`;
    }

    /**
     * This handler Toggles component when on small device
     */
    toggleComponentHandler = () => {
        toggleComponent(this);
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


    render() {
        const display = this.state.display;
        return (
            <Main>
                <Row bg={"primary no-gutter"}><ToggleComponent toggleComponentHandler={this.toggleComponentHandler}/></Row>
                <Row bg={"primary no-gutter"}>
                    <Col sm={"12"}>
                    
                        <h4
                               className={"pl-3 pt-2 pb-2 border border-left-0 border-right-0"}>
                            Conversation 
                        </h4>
                    </Col>
                </Row>
                <Row className="no-gutter">
                    <Col className="no-gutter pr-0" lg="3" md={6} sm={12}>
                        {
                            display.conversation ? (<ConversationDiv
                                status={this.state.status} data={this.state.conversations} getConversations={this.getConversations}
                                getConversation={this.getConversation}
                            />): null
                            
                       }
                    </Col>
                    {display.comments || display.messages ? <Col className="no-gutter pt-0" lg="9" md={6} sm={12}>
                        <Row className="no-gutter"><Toolbox /></Row>
                        <Row className="no-gutter">
                            <Col className="no-gutter pr-0" lg="8" md="12">
                                
                                {display.messages ? (<MessageDiv
                                    conversation={this.state.conversation}
                                    messages={this.state.messages}
                                    userId={this.state.userId}
                                    getComments={this.getComments}
                                    onChange={this.onChange}
                                    saveMessage={this.saveMesssage}
                                    message={this.state.message}
                                    gotoElement={this.gotoElement}
                                />
                                ) : null}
                            </Col>
                            <Col className="no-gutter pl-0 " lg="4" md="0" sm="12">
                                {display.comments ? <CommentDiv
                                    comments={this.state.comments}
                                    postComment={this.postComment}
                                    comment={this.state.comment}
                                    onChange={this.onChange}
                                    display={this.state.display}
                                /> : null}
                            </Col>
                        </Row>
                    </Col> : null}
                </Row>
            </Main>
        )
    }

}


export default Conversation;