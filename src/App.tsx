import React, {useContext, useState} from 'react';
import './App.css';
import Footer from "./components/Footer";
import BooksRoutes from "./routes/BooksRoutes";
import {BooksContext} from "./contexts/BooksContext";
import {useBooks} from "./hooks/useBooks";

function App() {
    const books = useBooks();

    const cache: any = localStorage.getItem("books-cache");
    const [selectedBooks, setSelectedBooks] = useState(cache ? JSON.parse(cache) :[]);

    let updateSelectedBooks = (books: any) => {
        setSelectedBooks(books);
        localStorage.setItem("books-cache", JSON.stringify(books))
    }

    return (
        <>
            <div className="main">
                <BooksContext.Provider value={{selectedBooks, updateSelectedBooks, books}}>
                    <BooksRoutes/>
                </BooksContext.Provider>
                <Footer/>
            </div>
        </>
    );
}

export default App;
