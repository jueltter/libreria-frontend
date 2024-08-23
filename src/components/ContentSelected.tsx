import React from 'react';
import Book from "./Book";
import CustomNav from "./CustomNav";

const ContentSelected = () => {
    return (
        <>
            <CustomNav></CustomNav>
            <Book />
        </>
    );
};

export default ContentSelected;