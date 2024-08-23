import React, {useContext, useState} from 'react';
import './App.css';
import Footer from "./components/Footer";
import BooksRoutes from "./routes/BooksRoutes";
import {BooksContext} from "./contexts/BooksContext";

function App() {
    const [selectedBooks, setSelectedBooks] = useState([]);

    let updateSelectedBooks = (books: any) => {
        setSelectedBooks(books);
    }

    return (
        <>
            <div className="main">
                <BooksContext.Provider value={{selectedBooks, updateSelectedBooks}}>
                    <BooksRoutes/>
                </BooksContext.Provider>
                <Footer/>
            </div>

        </>
    );
}

export default App;
