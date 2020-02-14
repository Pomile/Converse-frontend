import React from 'react';
import './fontawesome';
import Layout from './components/Layout/Layout';
import Conversation from './containers/Conversation';
import { Container, Row } from 'react-bootstrap';
import classes from './components/Layout/Layout.module.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

function App(props) {
  const style = [classes.LayoutHeight, classes.LayoutBg].join(' ');
  return (
    <Layout>
      <Container className={style} fluid={true}>
        <Row>
          <Header />
        </Row>
        <Row className="no-gutter" >
          <Sidebar />
          <Conversation services={props.services} />
        </Row>
      </Container>  
    </Layout>
  );
}

export default App;
