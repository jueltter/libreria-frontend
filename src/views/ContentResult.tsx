import React from 'react';
import Books from "../components/Books";
import CustomNav from "../components/CustomNav";

const ContentResult = () => {
    return (
        <>
            <CustomNav></CustomNav>
            <Books filteredBooks={[]}/>
        </>
    );
};

export default ContentResult;