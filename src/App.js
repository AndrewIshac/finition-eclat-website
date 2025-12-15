import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import StairsPage from './pages/StairsPage';
import KitchenPage from './pages/KitchenPage';
import FlooringPage from './pages/FlooringPage';
import ShopPage from './pages/ShopPage';
import OtherShopPage from './pages/OtherShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GeneralPage from './pages/GeneralPage';
import PortesPage from './pages/PortesPage';
import PlancherBoutiquePage from './pages/PlancherBoutiquePage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header with Navigation */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/escaliers" element={<StairsPage />} />
          <Route path="/services/cuisine" element={<KitchenPage />} />
          <Route path="/services/plancher" element={<FlooringPage />} />
          <Route path="/services/general" element={<GeneralPage />} />
          <Route path="/services/portes" element={<PortesPage />} />
          <Route path="/boutique" element={<ShopPage />} />
          <Route path="/boutique/gants" element={<ShopPage />} />
          <Route path="/boutique/plancher" element={<PlancherBoutiquePage />} />
          <Route path="/boutique/autres" element={<OtherShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h4>Contactez-nous</h4>
                <p>Email: info@finitioneclat.ca</p>
                <p>Tél: +1 (450) 341-1121</p>
                <p>Tél: +1 (514) 834-3554</p>
              </div>
              <div className="footer-section">
                <h4>Adresse de l'atelier</h4>
                <p>3145 Rue Harvey,</p>
                <p>Local 6, Saint Hubert, Quebec</p>
              </div>
            </div>
            <p className="footer-bottom">© 2025 Finition Éclat. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
