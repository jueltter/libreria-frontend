import React, {useContext, useState} from 'react';
import './App.css';
import Footer from "./components/Footer";
import BooksRoutes from "./routes/BooksRoutes";
import {BooksContext} from "./contexts/BooksContext";
import {useBooks} from "./hooks/useBooks";

function App() {
    const [selectedBooks, setSelectedBooks] = useState([]);
    const books = useBooks();

    let updateSelectedBooks = (books: any) => {
        setSelectedBooks(books);
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
