import React from 'react';
import CustomNav from "../components/CustomNav";
import './ContentHome.css'
import {Col, Container, Figure, Row} from "react-bootstrap";

const ContentHome = () => {
    return (
        <>
            <CustomNav></CustomNav>
            <Container fluid className="home">
                <Row>
                    <Col>
                        <h3>Bienvenido!</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Figure>
                            <Figure.Image
                                height={286}
                                width={340}
                                src="https://static.vecteezy.com/system/resources/previews/017/744/893/original/open-book-illustration-png.png">

                            </Figure.Image>
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ContentHome;