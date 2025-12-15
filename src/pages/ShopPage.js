import React from 'react';
import { Link } from 'react-router-dom';
import GlovesSection from '../components/GlovesSection';
import './ShopPage.css';

function ShopPage() {
  return (
    <div className="shop-page">
      {/* Gloves Section */}
      <GlovesSection />

      {/* CTA */}
      <section className="shop-cta">
        <div className="container">
          <h2>Besoin d'aide pour choisir?</h2>
          <p>Contactez-nous pour des conseils personnalisés</p>
          <Link to="/contact" className="cta-button">
            Nous Contacter
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ShopPage;
