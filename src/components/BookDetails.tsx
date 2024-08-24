import React from 'react';
import {Col, Container, Figure, ListGroup, Row} from "react-bootstrap";
import './BookDetails.css'

const BookDetails = (props:any) => {
    return (
        <>
            <Container fluid className="book-details">
               <Row className="justify-content-center">
                    <Col lg="3">
                    </Col>
                    <Col>
                        <Figure>
                            <Figure.Image
                                width="340" height="286"
                                src={`/covers/${props.portada}`}>
                            </Figure.Image>
                        </Figure>
                    </Col>
                    <Col >
                        <h2>{props.titulo}</h2>
                        <ListGroup >
                            <ListGroup.Item className="book-details--detail">Autor: {props.autor}</ListGroup.Item>
                            <ListGroup.Item className="book-details--detail">Género: {props.genero}</ListGroup.Item>
                            <ListGroup.Item className="book-details--detail">Año: {props.anio}</ListGroup.Item>
                            <ListGroup.Item className="book-details--detail">ISBN-10: {props.isbn10}</ListGroup.Item>
                            <ListGroup.Item className="book-details--detail">ISBN-13: {props.isbn13}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg="3">
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BookDetails;