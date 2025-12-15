import React from 'react';
import { Link } from 'react-router-dom';
import GeneralSection from '../components/GeneralSection';
import './ServicePage.css';

function GeneralPage() {
  return (
    <div className="service-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Portes, Moulures & Finition sur Mesure</h1>
          <p>Solutions personnalisées selon vos besoins</p>
        </div>
      </div>

      {/* General Content */}
      <GeneralSection />

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Intéressé par nos services de finition?</h2>
          <p>Demandez une soumission gratuite dès aujourd'hui</p>
          <Link to="/contact" className="cta-button">
            Demander une Soumission Gratuite
          </Link>
        </div>
      </section>
    </div>
  );
}

export default GeneralPage;



