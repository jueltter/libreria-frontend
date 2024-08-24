import React from 'react';
import CustomNav from "../components/CustomNav";
import {Col, Container, Figure, Row} from "react-bootstrap";
import './ContentNotFound.css'

const ContentNotFound = () => {
    return (
        <>
            <CustomNav></CustomNav>
            <Container fluid className="not-found">
                <Row>
                    <Col>
                        <h3>Página no encontrada!</h3>
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

export default ContentNotFound;