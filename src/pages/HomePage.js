import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import './HomePage.css';

function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title">Nos Produits et Services</h2>
          <p className="section-intro">
            Découvrez notre gamme complète de services de finition et rénovation
          </p>
          
          <div className="services-grid">
            <Link to="/services/escaliers" className="service-card" onClick={scrollToTop}>
              <div className="service-card-inner">
                <div className="service-icon">🪜</div>
                <h3>Finition des Escaliers</h3>
                <p>Ventes, finition et installation d'escalier</p>
                <span className="learn-more">En savoir plus →</span>
              </div>
            </Link>

            <Link to="/services/cuisine" className="service-card" onClick={scrollToTop}>
              <div className="service-card-inner">
                <div className="service-icon">🏠</div>
                <h3>Rénovation de Cuisine</h3>
                <p>Refacing d'armoires et restauration</p>
                <span className="learn-more">En savoir plus →</span>
              </div>
            </Link>

            <Link to="/services/plancher" className="service-card" onClick={scrollToTop}>
              <div className="service-card-inner">
                <div className="service-icon">🪵</div>
                <h3>Vente & Installation de Plancher</h3>
                <p>Bois franc, flottant et vinyl</p>
                <span className="learn-more">En savoir plus →</span>
              </div>
            </Link>

            <Link to="/services/portes" className="service-card" onClick={scrollToTop}>
              <div className="service-card-inner">
                <div className="service-icon">🚪</div>
                <h3>Portes</h3>
                <p>Fabrication, finition et installation de portes en bois sur mesure</p>
                <span className="learn-more">En savoir plus →</span>
              </div>
            </Link>

            <Link to="/boutique" className="service-card highlight" onClick={scrollToTop}>
              <div className="service-card-inner">
                <div className="service-icon">🧤</div>
                <div className="new-badge-small">NOUVEAU</div>
                <h3>Gants de Protection</h3>
                <p>Boutique en ligne - Prix compétitifs</p>
                <span className="learn-more">Voir la boutique →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-home">
        <div className="container">
          <h2>Pourquoi Finition Éclat?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">300+</div>
              <h4>Projets Complétés</h4>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">100%</div>
              <h4>Satisfaction</h4>
              <p>Clients satisfaits garantis</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">💰</div>
              <h4>Prix Abordables</h4>
              <p>Meilleur rapport qualité-prix</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">✓</div>
              <h4>Qualité Garantie</h4>
              <p>Produits de haute qualité</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-home">
        <div className="container">
          <h2>Prêt à Commencer Votre Projet?</h2>
          <p>Contactez-nous pour une estimation gratuite</p>
          <Link to="/contact" className="cta-button-large" onClick={scrollToTop}>
            Demander une Soumission Gratuite
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
