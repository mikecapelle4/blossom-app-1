import React, { useState } from 'react';
import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import SemiPermanentBrowsPage from './components/SemiPermanentBrowsPage';
import BespokeFacialsPage from './components/BespokeFacialsPage';
import FineLineTattoosPage from './components/FineLineTattoosPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'semi-permanent-brows':
        return <SemiPermanentBrowsPage />;
      case 'bespoke-facials':
        return <BespokeFacialsPage />;
      case 'fine-line-tattoos':
        return <FineLineTattoosPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <NavBar onPageChange={handlePageChange} currentPage={currentPage} />
      <main className="main-content">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;
