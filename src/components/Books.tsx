import React, {useContext} from 'react';
import Book from "./Book";
import {BooksContext} from "../contexts/BooksContext";
import {Col, Container, Row} from "react-bootstrap";

interface data {
    filteredBooks: any[];
}

const Books: React.FC<data> = ({filteredBooks}) => {


    return (
        <>
            <Container fluid>
                <Row lg="6" md="4" sm="1">
                    {filteredBooks.map((book, index) => (
                        <Col key={index}>
                            <Book key={index}
                                  titulo={book.titulo}
                                  portada={book.portada}
                                  anio={book.anio}
                                  genero={book.genero}
                                  autor={book.autor}
                                  id={book.id}></Book>

                        </Col>

                    ))}
                </Row>

            </Container>
        </>
    );
};

export default Books;