import React, {useContext} from 'react';
import {Button, Col, Container, Figure, ListGroup, Row} from "react-bootstrap";
import './BookDetails.css'
import {BooksContext} from "../contexts/BooksContext";
import {Link} from "react-router-dom";

const BookDetails = (props:any) => {
    const {selectedBooks, updateSelectedBooks} = useContext(BooksContext);
    console.log(selectedBooks);
    const isSelected =  selectedBooks.filter(obj => obj.id === props.id).length > 0;

    let addBook = (book: any) => {
        let selectedBooksCopy = selectedBooks.filter(obj => obj.id !== book.id);
        selectedBooksCopy.push(book);
        updateSelectedBooks(selectedBooksCopy);
    };

    let removeBook = (book: any) => {
        let selectedBooksCopy = selectedBooks.filter(obj => obj.id !== book.id);
        updateSelectedBooks(selectedBooksCopy);
    };

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
                        <div>
                            {!isSelected ? (<Button variant="primary" onClick={() => addBook(props)} className="book-details--button">
                                Agregar
                            </Button>) : (<Button variant="danger" onClick={() => removeBook(props)} className="book-details--button">
                                Remover
                            </Button>)}
                            <Link to={"/search"}>
                                <Button variant="primary"  className="book-details--button" >
                                    Ir a Buscar
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg="3">
                    </Col>
               </Row>
            </Container>
        </>
    );
};

export default BookDetails;