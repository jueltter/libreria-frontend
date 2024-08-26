import React, {useContext} from 'react';
import Books from "../components/Books";
import CustomNav from "../components/CustomNav";
import {BooksContext} from "../contexts/BooksContext";
import {Button, Col, Form, Row} from "react-bootstrap";

const ContentResult = () => {
    const {selectedBooks,updateSelectedBooks} = useContext(BooksContext);

    let reserve = ()  => {
        localStorage.setItem("books-cache", '[]');
        updateSelectedBooks([]);
    }

    return (
        <>
            <CustomNav></CustomNav>
            <Form className="content-search--form">
                <Row className="align-items-center justify-content-center">
                    <Col xs="auto">
                        <Button className="mb-2" onClick={reserve}>
                            Alquiler
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Books filteredBooks={selectedBooks}/>
        </>
    );
};

export default ContentResult;