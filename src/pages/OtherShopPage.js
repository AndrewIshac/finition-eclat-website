import React from 'react';
import { Link } from 'react-router-dom';
import './ShopPage.css';

function OtherShopPage() {
  return (
    <div className="shop-page">
      {/* Other Products Section */}
      <section className="other-products-section">
        <div className="container">
          <div className="section-header">
            <h2>Autres Produits</h2>
            <p className="section-subtitle">
              Découvrez nos autres produits et services disponibles
            </p>
          </div>

          {/* Coming Soon Box */}
          <div className="coming-soon-box">
            <div className="coming-soon-icon">🚧</div>
            <h2>Bientôt Disponible</h2>
            <p>Nous ajoutons constamment de nouveaux produits à notre boutique.</p>
            <p className="coming-soon-subtitle">
              Restez à l'écoute pour découvrir nos prochaines offres!
            </p>
            <div className="coming-soon-items">
              <div className="coming-soon-item">
                <span className="item-icon">🪵</span>
                <span>Plancher & Bois</span>
              </div>
              <div className="coming-soon-item">
                <span className="item-icon">🪜</span>
                <span>Composantes Escaliers</span>
              </div>
              <div className="coming-soon-item">
                <span className="item-icon">🚪</span>
                <span>Portes & Moulures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default OtherShopPage;



