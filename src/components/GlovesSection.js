import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './GlovesSection.css';

function GlovesSection() {
  const [selectedGlove, setSelectedGlove] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true
        }
      }
    ]
  };

  // Helper function to create image path - handles spaces
  const getImagePath = (folder, filename) => {
    return `/images/${folder}/${filename.replace(/ /g, '%20')}`;
  };

  // All glove products with prices and details
  const gloveProducts = [
    // NITRILE GLOVES
    {
      id: 1,
      name: "Gans Nitrile - Amazing Nitrile",
      type: "Nitrile",
      price: 155,
      packageImage: getImagePath('gants', "Aurelia-BoitesGants-600x800-Amazing.jpg"),
      gloveImage: "",
      textureImage: "",
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Amazing Nitrile", "Résistants", "Confortables"]
    },
    {
      id: 2,
      name: "Gans Nitrile - Perform Nitrile",
      type: "Nitrile",
      price: 115,
      packageImage: getImagePath('gants', "Aurelia-BoitesGants-600x800-Perform.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_PerformG-300x300.jpg"),
      textureImage: getImagePath('gants', "IMG_0441_Perform_Texture.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Perform Nitrile", "Résistants", "Confortables"]
    },
    {
      id: 3,
      name: "Gans Nitrile - Blush Nitrile",
      type: "Nitrile",
      price: 115,
      packageImage: getImagePath('gants', "Aurelia-BoitesGants-600x800-Blush.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_BlushG.jpg"),
      textureImage: getImagePath('gants', "aurelia_GantsBoites_600x800_BlushG.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Blush Nitrile", "Résistants", "Confortables"]
    },
    {
      id: 4,
      name: "Gans Nitrile - Protegé Nitrile",
      type: "Nitrile",
      price: 59,
      packageImage: getImagePath('gants', "aurelia_GantsBoites_600x800_ProtegeB.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_ProtegeG.jpg"),
      textureImage: getImagePath('gants', "aurelia_GantsBoites_600x800_ProtegeG.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Protegé Nitrile", "Résistants", "Confortables"]
    },
    {
      id: 5,
      name: "Gans Nitrile - Robust Plus",
      type: "Nitrile",
      price: 79,
      packageImage: getImagePath('gants', "aurelia_GantsBoites_600x800_RobustPlusB.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_RobustPlusG.jpg"),
      textureImage: getImagePath('gants', "Aurelia_Gloves_Canada_robust_plus_micro-texture.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Robust Plus", "Résistants", "Confortables"]
    },
    {
      id: 6,
      name: "Gans Nitrile - Robust",
      type: "Nitrile",
      price: 65,
      packageImage: getImagePath('gants', "aurelia_GantsBoites_600x800_RobustB.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_RobustG.jpg"),
      textureImage: getImagePath('gants', "Aurelia_Gloves_Canada_Robust_micro-texture.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Robust", "Résistants", "Confortables"]
    },
    {
      id: 7,
      name: "Gans Nitrile - Bold",
      type: "Nitrile",
      price: 70,
      packageImage: getImagePath('gants', "Bold - Nitrile Gloves Package.jpg"),
      gloveImage: getImagePath('gants', "Bold - Nitrile Gloves.jpg"),
      textureImage: getImagePath('gants', "Bold - Nitrile Gloves Texture.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Bold", "Résistants", "Confortables"]
    },
    {
      id: 8,
      name: "Gans Nitrile - BoldMax",
      type: "Nitrile",
      price: 89,
      packageImage: getImagePath('gants', "BoldMax - Nitrile Gloves Package.jpg"),
      gloveImage: getImagePath('gants', "BoldMax - Nitrile Gloves.jpg"),
      textureImage: getImagePath('gants', "BoldMax - Nitrile Gloves Texture.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants (XLarge, XXLarge: 90 gants par boîte)",
      features: ["BoldMax", "Premium", "Durables"]
    },
    {
      id: 9,
      name: "Gans Nitrile - Robust 9.0",
      type: "Nitrile",
      price: 75,
      packageImage: getImagePath('gants', "aurelia_GantsBoites_600x800_Robust9B.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_Robust9G.jpg"),
      textureImage: getImagePath('gants', "aurelia_GantsBoites_600x800_Robust9G.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Robust 9.0", "Résistants", "Confortables"]
    },
    {
      id: 10,
      name: "Gans Nitrile - Ignite",
      type: "Nitrile",
      price: 100,
      packageImage: getImagePath('gants', "aurelia_GantsBoites_600x800_IgniteB.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_IgniteG.jpg"),
      textureImage: getImagePath('gants', "Aurelia_Gloves_Canada_ignite-texture.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants (XLarge, XXLarge: 90 gants par boîte)",
      features: ["Ignite", "Résistants", "Confortables"]
    },
    {
      id: 11,
      name: "Gans Nitrile - Transform 100",
      type: "Nitrile",
      price: 49,
      packageImage: getImagePath('gants', "aurelia_GantsBoites_600x800_TransformB.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_TransformG.jpg"),
      textureImage: getImagePath('gants', "texture Traasnform 100.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Transform 100", "Résistants", "Confortables"]
    },
    {
      id: 12,
      name: "Gans Nitrile - Sonic",
      type: "Nitrile",
      price: 155,
      packageImage: getImagePath('gants', "Aurelia-BoitesGants-600x800-Sonic.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_SonicG.jpg"),
      textureImage: getImagePath('gants', "IMG_0439_Sonic_texture-1.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Sonic", "Résistants", "Confortables"]
    },
    {
      id: 13,
      name: "Gans Nitrile - Absolute 100",
      type: "Nitrile",
      price: 56,
      packageImage: getImagePath('gants', "100 absolut boitte.png"),
      gloveImage: "",
      textureImage: "",
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Absolute 100", "Résistants", "Confortables"]
    },
    // VINYLE GLOVES
    {
      id: 14,
      name: "Gans Vinyle - Delight PF",
      type: "Vinyle",
      price: 41,
      packageImage: getImagePath('gants', "Aurelia-BoitesGants-600x800-Delight.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_DelightG.jpg"),
      textureImage: getImagePath('gants', "Aurelia_Gloves_Canada_Delight_Smooth.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Delight PF", "Vinyle", "Confortables"]
    },
    {
      id: 15,
      name: "Gans Vinyle - Delight PF Blue",
      type: "Vinyle",
      price: 44,
      packageImage: getImagePath('gants', "aurelia_GantsBoites_600x800_DelightBlueB.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_DelightBlueG.jpg"),
      textureImage: getImagePath('gants', "Aurelia_Gloves_Canada_DelightBlue_Smooth.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Delight PF Blue", "Vinyle", "Confortables"]
    },
    // LATEX GLOVES
    {
      id: 16,
      name: "Gans Latex - Distinct",
      type: "Latex",
      price: 107,
      packageImage: getImagePath('gants', "Aurelia-BoitesGants-600x800-Distinct.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_DistinctG.jpg"),
      textureImage: getImagePath('gants', "Aurelia_Gloves_Canada_distinct_Honeycomb.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Distinct", "Latex", "Confortables"]
    },
    {
      id: 17,
      name: "Gans Latex - Vibrant",
      type: "Latex",
      price: 85,
      packageImage: getImagePath('gants', "aurelia_GantsBoites_600x800_VibrantB.jpg"),
      gloveImage: getImagePath('gants', "aurelia_GantsBoites_600x800_VibrantG.jpg"),
      textureImage: getImagePath('gants', "Aurelia_Gloves_Canada__vibrant_micro-texture-1.jpg"),
      description: "Pour tous vos besoins",
      details: "10 boîtes par caisse et chaque boîte contient 100 gants",
      features: ["Vibrant", "Latex", "Confortables"]
    }
  ];

  const openModal = (glove) => {
    setSelectedGlove(glove);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedGlove(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <section className="gloves-section" id="gants">
      <div className="container">
        <div className="section-header">
          <div className="new-badge">NOUVEAU</div>
          <h2>VENTE DE GANTS DE PROTECTION</h2>
          <p className="section-subtitle" style={{fontSize: '18px', fontWeight: '600', marginTop: '10px'}}>Aurelia</p>
          <p className="section-subtitle">
            Découvrez nos gants professionnels pour tous vos besoins
          </p>
        </div>

        {/* Gloves Carousel */}
        <div className="gloves-carousel-wrapper">
          <Slider {...settings}>
            {gloveProducts.map((glove) => (
              <div key={glove.id} className="glove-slide">
                <div className="glove-card" onClick={() => openModal(glove)}>
                  <div 
                    className="glove-image package-image"
                    style={{ backgroundImage: `url(${glove.packageImage})` }}
                  >
                    <div className="glove-overlay">
                      <button className="view-details-btn">Voir Détails</button>
                    </div>
                  </div>
                  <div className="glove-info">
                    <h3>{glove.name}</h3>
                    <p className="glove-price">${glove.price}</p>
                    <p className="glove-description">{glove.description}</p>
                    <div className="glove-features">
                      {glove.features.map((feature, index) => (
                        <span key={index} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Modal for Glove Details */}
        {selectedGlove && (
          <div className="glove-modal-overlay" onClick={closeModal}>
            <div className="glove-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeModal}>×</button>
              <div className="modal-header">
                <h2>{selectedGlove.name}</h2>
                <p className="modal-price">${selectedGlove.price}</p>
                <p className="modal-description">{selectedGlove.description}</p>
                {selectedGlove.details && (
                  <p className="modal-details">{selectedGlove.details}</p>
                )}
              </div>
              <div className="modal-images">
                <div className="modal-image-item">
                  <h4>Emballage</h4>
                  <div 
                    className="modal-image package-modal"
                    style={{ backgroundImage: `url(${selectedGlove.packageImage})` }}
                  />
                </div>
                {selectedGlove.gloveImage && (
                  <div className="modal-image-item">
                    <h4>Gant</h4>
                    <div 
                      className="modal-image glove-modal"
                      style={{ backgroundImage: `url(${selectedGlove.gloveImage})` }}
                    />
                  </div>
                )}
                {selectedGlove.textureImage && (
                  <div className="modal-image-item">
                    <h4>Texture</h4>
                    <div 
                      className="modal-image texture-modal"
                      style={{ backgroundImage: `url(${selectedGlove.textureImage})` }}
                    />
                  </div>
                )}
              </div>
              <div className="modal-features">
                <h4>Caractéristiques:</h4>
                <div className="features-list">
                  {selectedGlove.features.map((feature, index) => (
                    <span key={index} className="feature-tag-modal">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="modal-cta">
                <Link to="/contact" className="cta-button" onClick={closeModal}>
                  Commander Maintenant
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="gloves-info-box">
          <div className="info-content">
            <div className="info-item">
              <div className="info-icon">📦</div>
              <h4>Livraison Disponible</h4>
              <p>Nous livrons partout au Québec</p>
            </div>
            <div className="info-item">
              <div className="info-icon">✓</div>
              <h4>Qualité Garantie</h4>
              <p>Produits certifiés et testés</p>
            </div>
            <div className="info-item">
              <div className="info-icon">💰</div>
              <h4>Prix Compétitifs</h4>
              <p>Meilleur rapport qualité-prix</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <h4>Commandez Maintenant</h4>
              <p>Contactez-nous pour commander</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="gloves-cta">
          <Link to="/contact" className="cta-button">
            Commander Maintenant
          </Link>
        </div>

        {/* Price Disclaimer */}
        <div style={{textAlign: 'center', marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
          <p style={{fontSize: '14px', color: '#666', fontStyle: 'italic'}}>
            Tous les prix sont sujets à changement sans préavis.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GlovesSection;
