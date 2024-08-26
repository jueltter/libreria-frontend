import React, {useContext} from 'react';
import Books from "../components/Books";
import CustomNav from "../components/CustomNav";
import {BooksContext} from "../contexts/BooksContext";
import {Button, Col, Container, Figure, Form, Row} from "react-bootstrap";

const ContentResult = () => {
    const {selectedBooks, updateSelectedBooks} = useContext(BooksContext);

    let reserve = () => {
        localStorage.setItem("books-cache", '[]');
        updateSelectedBooks([]);
    }

    return (
        <>
            <CustomNav></CustomNav>
            {selectedBooks.length > 0 ? (
                <div>
                    <Form className="content-search--form">
                        <Row className="align-items-center justify-content-center">
                            <Col xs="auto">
                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>Plazo:</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="date"/>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    <Books filteredBooks={selectedBooks}/>
                    <Form className="content-search--form">
                        <Row className="align-items-center justify-content-center">
                            <Col xs="auto">
                                <Button className="mb-2" onClick={reserve}>
                                    Alquilar
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                </div>
            ) : (
                <Container fluid className="home">
                    <Row>
                        <Col>
                            <h3>Agrega algunos libros</h3>
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

            )}


        </>
    );
};

export default ContentResult;