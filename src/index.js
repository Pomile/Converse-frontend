import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import users from './data/user.json';
import messagesData from './data/message.json';
import conversationsData from './data/conversation.json';
import commentsData from './data/comment.json';
import { ConversationService } from './services/conversation';
import { MessagesService } from './services/mesage';
import { CommentsService } from './services/comment';
import * as serviceWorker from './serviceWorker';

const conversations = new ConversationService(conversationsData, users);
const messages = new MessagesService(messagesData, users);
const comments = new CommentsService(commentsData, users);

const services = {
    conversations,
    messages,
    comments
}

ReactDOM.render(<App services={services} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
