import React from 'react';
import { Link } from 'react-router-dom';
import StairsSection from '../components/StairsSection';
import './ServicePage.css';

function StairsPage() {
  return (
    <div className="service-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Finition des Escaliers</h1>
          <p>Transformation professionnelle de vos escaliers</p>
        </div>
      </div>

      {/* Stairs Content */}
      <StairsSection />

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Intéressé par nos services d'escaliers?</h2>
          <p>Demandez une soumission gratuite dès aujourd'hui</p>
          <Link to="/contact" className="cta-button">
            Demander une Soumission Gratuite
          </Link>
        </div>
      </section>
    </div>
  );
}

export default StairsPage;
