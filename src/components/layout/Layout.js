import React from 'react';
import Aux from '../../hoc/Wrapper';
import { Container, Row } from 'react-bootstrap';
import classes from './Layout.module.css';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Main } from '../Main/Main';

function Layout(props) {
    const style = [classes.LayoutHeight, classes.LayoutBg].join(' ');
        return (
            <Aux>
                <Container className={style} fluid={true}>
                    <Row>
                        <Header />
                    </Row>   
                    <Row className="no-gutter" >
                        <Sidebar />
                        <Main />
                    </Row>   
                </Container>  
            </Aux>
        );
}

export default Layout;
