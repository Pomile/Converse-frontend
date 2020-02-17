import React from 'react';
import './fontawesome';
import Conversation from './containers/Conversation';
import { Container, Row } from 'react-bootstrap';
import classes from './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

function App(props) {
  const style = [classes.AppHeight, classes.AppBg].join(' ');
  return (
      <Container className={style} fluid={true}>
        <Row>
          <Header />
        </Row>
        <Row className="no-gutter" >
          <Sidebar />
          <Conversation services={props.services} />
        </Row>
      </Container>
  );
}

export default App;
