import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";

function Chat() {
    return (
        <Container>
            <Row>
            <Col md={9}>
                    <MessageForm />
                </Col>
                <Col md={3}>
                    <Sidebar />
                </Col>
                
            </Row>
        </Container>
    );
}

export default Chat;
