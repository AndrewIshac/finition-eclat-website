import React from 'react';
import { Link } from 'react-router-dom';
import FlooringSection from '../components/FlooringSection';
import './ServicePage.css';

function FlooringPage() {
  return (
    <div className="service-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Vente & Installation de Plancher</h1>
          <p>Bois franc, flottant, vinyl et céramique à prix abordables</p>
        </div>
      </div>

      {/* Flooring Content */}
      <FlooringSection />

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Besoin d'un nouveau plancher?</h2>
          <p>Obtenez une soumission gratuite pour votre projet</p>
          <Link to="/contact" className="cta-button">
            Demander une Soumission Gratuite
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FlooringPage;
