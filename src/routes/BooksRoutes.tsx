import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import ContentNotFound from "../components/ContentNotFound";
import ContentHome from "../components/ContentHome";
import ContentSearch from "../components/ContentSearch";
import ContentSelected from "../components/ContentSelected";
import ContentResult from "../components/ContentResult";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ContentHome/>}/>
                <Route path="/search" element={<ContentSearch/>}/>
                <Route path="/book/:id" element={<ContentSelected/>}/>
                <Route path="/result" element={<ContentResult/>}/>
                <Route path="*" element={<ContentNotFound/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default AppRoutes;