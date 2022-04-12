import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Work') {
            return <Work />;
        }
        return <Contact />;
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </>
    )
}