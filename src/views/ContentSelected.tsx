import React from 'react';
import Book from "../components/Book";
import CustomNav from "../components/CustomNav";

const ContentSelected = () => {
    return (
        <>
            <CustomNav></CustomNav>
            <Book />
        </>
    );
};

export default ContentSelected;