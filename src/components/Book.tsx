import React from 'react';
import {Card, Button} from "react-bootstrap";
import './Book.css'
import {Link} from "react-router-dom";

const Book = (props: any) => {


    return (
        <>
            <Card className="book">
                <Card.Img variant="top" src={`/covers/${props.portada}`} />
                <Card.Body>
                    <Card.Title>{props.titulo}</Card.Title>
                    <Card.Text>
                        {`${props.autor} - ${props.genero} - ${props.anio}`}
                    </Card.Text>
                    <Link to={`/book/${props.id}`}>
                        <Button variant="primary">Ver Detalles</Button>
                    </Link>
                </Card.Body>
            </Card>


        </>
    );
};

export default Book;