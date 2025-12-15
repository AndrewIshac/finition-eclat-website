import React from 'react';
import { Link } from 'react-router-dom';
import PortesSection from '../components/PortesSection';
import './ServicePage.css';

function PortesPage() {
  return (
    <div className="service-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Portes</h1>
          <p>Fabrication, finition et installation de portes en bois sur mesure</p>
        </div>
      </div>

      {/* Portes Content */}
      <PortesSection />

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Intéressé par nos portes sur mesure?</h2>
          <p>Demandez une soumission gratuite dès aujourd'hui</p>
          <Link to="/contact" className="cta-button">
            Demander une Soumission Gratuite
          </Link>
        </div>
      </section>
    </div>
  );
}

export default PortesPage;

