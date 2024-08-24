import React, {useContext, useState} from 'react';
import Books from "../components/Books";
import CustomNav from "../components/CustomNav";
import {Form, Row, Col, Button} from "react-bootstrap";
import './ContentSearch.css';
import {BooksContext} from "../contexts/BooksContext";

const ContentSearch = () => {
    const {books} = useContext(BooksContext);
    const [filteredBooks, setFilteredBooks] = useState(books);
    const [query, setQuery] = useState("");

    let updateQuery = (event: any) => {
        setQuery(event.target.value);
    };

    let filterBooks = () => {
        setFilteredBooks(books.filter(obj => obj.titulo.toLowerCase().startsWith(query.toLowerCase())));
    }

    return (
        <>
            <CustomNav></CustomNav>
            <Form className="content-search--form">
                <Row className="align-items-center justify-content-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Buscar
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Nombre Libro"
                            onChange={updateQuery}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button className="mb-2" onClick={filterBooks}>
                            Buscar
                        </Button>
                    </Col>
                </Row>
            </Form>

            <Books filteredBooks={filteredBooks}/>
        </>
    );
};

export default ContentSearch;