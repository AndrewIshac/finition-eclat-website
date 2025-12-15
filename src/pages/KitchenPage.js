import React from 'react';
import { Link } from 'react-router-dom';
import KitchenSection from '../components/KitchenSection';
import './ServicePage.css';

function KitchenPage() {
  return (
    <div className="service-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Rénovation de Cuisine</h1>
          <p>Transformez votre cuisine avec nos services de refacing</p>
        </div>
      </div>

      {/* Kitchen Content */}
      <KitchenSection />

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Prêt à transformer votre cuisine?</h2>
          <p>Contactez-nous pour une estimation gratuite</p>
          <Link to="/contact" className="cta-button">
            Demander une Soumission Gratuite
          </Link>
        </div>
      </section>
    </div>
  );
}

export default KitchenPage;
