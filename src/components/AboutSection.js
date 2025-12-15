import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          
          {/* Main About */}
          <div className="about-main">
            <h2>Qui sommes-nous?</h2>
            <div className="about-text">
              <p className="highlight-text">
                Nous sommes une entreprise familiale spécialisée dans la 
                Finition de bois, des Escaliers, Portes, Moulures, ainsi que la 
                Rénovation des Cuisines.
              </p>
              <p>
                Nous vendons et Installons des Escaliers et du Plancher en Bois 
                Franc, Flottant et Vinyl à des Prix Abordables!
              </p>
              <p>
                Nous demeurons honnête et toujours à l'écoute de vos 
                moindres besoins, afin de vous assurer un service impeccable 
                qui répondra parfaitement à vos attentes. Avec nos années 
                d'expériences dans le domaine, nous vous garantissons le 
                meilleur rapport qualité prix.
              </p>
              <p className="signature-text">
                Nous offrons une Estimation Gratuite, des produits de Haute 
                Qualité et un Service de Confiance.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">300+</div>
              <div className="stat-label">Projets Complétés</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction Client</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Disponible</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">✓</div>
              <div className="stat-label">Qualité Garantie</div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            <h3>Nos Produits et Services</h3>
            <div className="services-cards">
              <div className="service-item-card">
                <div className="service-icon">🪜</div>
                <h4>Finition des Escaliers</h4>
                <p>Ventes, finition et installation d'escalier</p>
              </div>
              <div className="service-item-card">
                <div className="service-icon">🏠</div>
                <h4>Rénovation de Cuisine</h4>
                <p>Refacing d'armoires et restauration de cabinets</p>
              </div>
              <div className="service-item-card">
                <div className="service-icon">🪵</div>
                <h4>Plancher</h4>
                <p>Vente et installation de bois franc, flottant et vinyl</p>
              </div>
              <div className="service-item-card">
                <div className="service-icon">🚪</div>
                <h4>Portes & Moulures</h4>
                <p>Finition professionnelle de portes et moulures</p>
              </div>
              <div className="service-item-card">
                <div className="service-icon">🧤</div>
                <h4>Gants de Protection</h4>
                <p>Gamme complète de gants professionnels</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="why-choose-us">
            <h3>Pourquoi Nous Choisir?</h3>
            <div className="reasons-grid">
              <div className="reason-item">
                <div className="reason-number">01</div>
                <div className="reason-content">
                  <h4>Expertise Familiale</h4>
                  <p>Une entreprise familiale avec des valeurs solides et un engagement envers la qualité</p>
                </div>
              </div>
              <div className="reason-item">
                <div className="reason-number">02</div>
                <div className="reason-content">
                  <h4>Prix Abordables</h4>
                  <p>Meilleur rapport qualité-prix avec des options économiques et haut de gamme</p>
                </div>
              </div>
              <div className="reason-item">
                <div className="reason-number">03</div>
                <div className="reason-content">
                  <h4>Service Personnalisé</h4>
                  <p>À l'écoute de vos besoins pour un service impeccable et sur mesure</p>
                </div>
              </div>
              <div className="reason-item">
                <div className="reason-number">04</div>
                <div className="reason-content">
                  <h4>Garantie Qualité</h4>
                  <p>Produits de haute qualité et travail garanti pour votre tranquillité d'esprit</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
