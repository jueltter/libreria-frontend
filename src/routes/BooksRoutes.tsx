import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import ContentNotFound from "../views/ContentNotFound";
import ContentHome from "../views/ContentHome";
import ContentSearch from "../views/ContentSearch";
import ContentSelected from "../views/ContentSelected";
import ContentResult from "../views/ContentResult";

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