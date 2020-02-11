import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Classses from './Main.module.css'

export const Main = (props) => {
    return (
        <div className={Classses.Main}>
            <Row bg={"primary"}>
                <Col sm={"6"}>
                    <h4>Conversation</h4>
                </Col>
                <Col sm={"6"}>other half</Col>
            </Row>
            <Row>
                <Col lg="3">conversation</Col>
                <Col lg="6">Message</Col>
                <Col lg="3">comments</Col>
            </Row>
        </div>
    )
}
