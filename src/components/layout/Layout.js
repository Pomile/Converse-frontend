import React from 'react';
import Aux from '../../hoc/Wrapper';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './Layout.module.css';

function Layout(props) {
    const style = [classes.LayoutHeight, classes.LayoutBg].join(' ');
        return (
            <Aux>
                <Container className={style} fluid={true}>
                    <Row className="no-gutter">
                        <Col className="bg-primary" sm={12}>{props.children}</Col>
                    </Row>   
                </Container>  
            </Aux>
        );
}

export default Layout;
