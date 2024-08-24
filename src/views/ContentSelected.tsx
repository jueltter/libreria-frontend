import React, {useContext, useEffect, useState} from 'react';
import CustomNav from "../components/CustomNav";
import BookDetails from "../components/BookDetails";
import {useParams} from "react-router-dom";
import {BooksContext} from "../contexts/BooksContext";

const ContentSelected = () => {
    const {id} = useParams();
    const {books} = useContext(BooksContext);
    const book = books.find(obj => obj.id.toString() === id);
    console.log(book)

    return (
        <>
            <CustomNav></CustomNav>
            {book ? (<BookDetails titulo={book.titulo}
                                  portada={book.portada}
                                  anio={book.anio}
                                  genero={book.genero}
                                  autor={book.autor}
                                  isbn10={book.isbn10}
                                  isbn13={book.isbn13}
                                  id={book.id}/>) : (<p></p>)}

        </>
    );
};

export default ContentSelected;