import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './PlancherBoutiquePage.css';

function PlancherBoutiquePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);
  const sliderInstanceRef = useRef(null);

  const openModal = (plancher) => {
    setSelectedImage(plancher);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    edgeFriction: 0.35,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    useTransform: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          swipe: true,
          swipeToSlide: true,
          draggable: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          swipe: true,
          swipeToSlide: true,
          touchMove: true,
          touchThreshold: 5,
          draggable: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          swipe: true,
          swipeToSlide: true,
          touchMove: true,
          touchThreshold: 5,
          draggable: true
        }
      }
    ]
  };

  // Enable wheel scrolling for carousel on desktop
  useEffect(() => {
    let scrollTimeout = null;
    let accumulatedScroll = 0;
    let lastScrollTime = 0;

    const handleWheel = (e) => {
      if (window.innerWidth > 768) {
        const slider = sliderRef.current;
        if (slider && slider.contains(e.target)) {
          const deltaY = e.deltaY;
          const absDelta = Math.abs(deltaY);
          const currentTime = Date.now();
          
          if (currentTime - lastScrollTime > 200) {
            accumulatedScroll = 0;
          }
          
          lastScrollTime = currentTime;
          accumulatedScroll += absDelta;
          
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          
          const slidesToMove = Math.min(Math.floor(accumulatedScroll / 60), 4);
          
          if (slidesToMove > 0 && absDelta > 3) {
            e.preventDefault();
            e.stopPropagation();
            
            if (sliderInstanceRef.current) {
              for (let i = 0; i < slidesToMove; i++) {
                setTimeout(() => {
                  if (deltaY > 0) {
                    sliderInstanceRef.current.slickNext();
                  } else {
                    sliderInstanceRef.current.slickPrev();
                  }
                }, i * 25);
              }
            } else {
              const sliderElement = slider.querySelector('.slick-slider');
              if (sliderElement) {
                const direction = deltaY > 0 ? 'next' : 'prev';
                const arrow = sliderElement.querySelector(`.slick-${direction}`);
                if (arrow) {
                  for (let i = 0; i < slidesToMove; i++) {
                    setTimeout(() => {
                      arrow.click();
                    }, i * 25);
                  }
                }
              }
            }
            
            accumulatedScroll = 0;
          }
          
          scrollTimeout = setTimeout(() => {
            accumulatedScroll = 0;
          }, 200);
        }
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (slider) {
        slider.removeEventListener('wheel', handleWheel);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  // Helper function for new images folder
  const getNewImagePath = (filename) => {
    const encodedFolder = 'new%20images';
    const encodedFilename = filename.replace(/ /g, '%20');
    return `/${encodedFolder}/${encodedFilename}`;
  };

  // All plancher images from "new images" folder (same as service page)
  const plancherImages = [
    "IMG-20251205-WA0011.jpg",
    "IMG-20251205-WA0012.jpg",
    "IMG-20251205-WA0013.jpg",
    "IMG-20251205-WA0014.jpg",
    "IMG-20251205-WA0015.jpg",
    "IMG-20251205-WA0016.jpg",
    "IMG-20251205-WA0017.jpg",
    "IMG-20251205-WA0018.jpg",
    "IMG-20251205-WA0019.jpg",
    "IMG-20251205-WA0020.jpg",
    "IMG-20251205-WA0021.jpg",
    "IMG-20251205-WA0022.jpg",
    "IMG-20251205-WA0023.jpg",
    "IMG-20251205-WA0024.jpg",
    "IMG-20251205-WA0025.jpg",
    "IMG-20251205-WA0026.jpg",
    "IMG-20251205-WA0027.jpg",
    "IMG-20251205-WA0028.jpg",
    "IMG-20251205-WA0029.jpg",
    "IMG-20251205-WA0030.jpg",
    "IMG-20251205-WA0031.jpg",
    "IMG-20251205-WA0032.jpg",
    "IMG-20251205-WA0033.jpg",
    "IMG-20251205-WA0034.jpg",
    "IMG-20251205-WA0035.jpg",
    "IMG-20251205-WA0036.jpg",
    "IMG-20251205-WA0037.jpg",
    "IMG-20251205-WA0038.jpg",
    "IMG-20251205-WA0039.jpg",
    "IMG-20251205-WA0040.jpg",
    "IMG-20251205-WA0041.jpg",
    "IMG-20251205-WA0042.jpg",
    "IMG-20251205-WA0043.jpg",
    "IMG-20251205-WA0044.jpg",
    "IMG-20251205-WA0045.jpg",
    "IMG-20251205-WA0046.jpg",
    "IMG-20251205-WA0047.jpg",
    "IMG-20251205-WA0048.jpg",
    "IMG-20251205-WA0049.jpg",
    "IMG-20251205-WA0050.jpg",
    "IMG-20251205-WA0051.jpg",
    "IMG-20251205-WA0052.jpg",
    "IMG-20251205-WA0053.jpg",
    "IMG-20251205-WA0054.jpg",
    "IMG-20251205-WA0055.jpg",
    "IMG-20251205-WA0056.jpg",
    "IMG-20251205-WA0057.jpg",
    "IMG-20251205-WA0058.jpg",
    "IMG-20251205-WA0059.jpg",
    "IMG-20251205-WA0060.jpg",
    "IMG-20251205-WA0061.jpg",
    "IMG-20251205-WA0062.jpg",
    "IMG-20251205-WA0063.jpg",
    "IMG-20251205-WA0064.jpg",
    "IMG-20251205-WA0065.jpg",
    "IMG-20251205-WA0066.jpg",
    "IMG-20251205-WA0067.jpg",
    "IMG-20251205-WA0068.jpg",
    "IMG-20251205-WA0069.jpg",
    "IMG-20251205-WA0070.jpg",
    "IMG-20251205-WA0071.jpg",
    "IMG-20251205-WA0072.jpg",
    "IMG-20251205-WA0073.jpg",
    "IMG-20251205-WA0074.jpg",
    "IMG-20251205-WA0075.jpg",
    "IMG-20251205-WA0076.jpg",
    "IMG-20251205-WA0077.jpg",
    "IMG-20251205-WA0078.jpg",
    "IMG-20251205-WA0079.jpg",
    "IMG-20251205-WA0080.jpg",
    "IMG-20251205-WA0081.jpg",
    "IMG-20251205-WA0082.jpg",
    "IMG-20251205-WA0083.jpg",
    "IMG-20251205-WA0084.jpg",
    "IMG-20251205-WA0085.jpg",
    "IMG-20251205-WA0086.jpg",
    "IMG-20251205-WA0087.jpg",
    "IMG-20251205-WA0088.jpg",
    "IMG-20251205-WA0089.jpg",
    "IMG-20251205-WA0090.jpg",
    "IMG-20251205-WA0091.jpg",
    "IMG-20251205-WA0092.jpg",
    "IMG-20251205-WA0093.jpg",
    "IMG-20251205-WA0094.jpg"
  ];

  // Simple naming: Plancher 1, Plancher 2, etc.
  const boisFrancTypes = plancherImages.map((img, index) => ({
    id: index + 1,
    name: `Plancher ${index + 1}`,
    image: getNewImagePath(img)
  }));

  return (
    <div className="plancher-boutique-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Plancher</h1>
          <p>Découvrez nos différents types de plancher</p>
        </div>
      </div>

      {/* Bois Franc Section */}
      <section className="plancher-boutique-section" id="bois-franc">
        <div className="container">
          <div className="section-header">
            <h2>Bois Franc</h2>
            <p className="section-price">À partir de 3.99$ par pc</p>
            <p className="section-subtitle">Plancher en bois franc de haute qualité</p>
          </div>

          <div className="plancher-carousel-wrapper" ref={sliderRef}>
            <Slider 
              {...settings}
              ref={(slider) => {
                sliderInstanceRef.current = slider;
              }}
            >
              {boisFrancTypes.map((plancher) => (
                <div key={plancher.id} className="plancher-slide">
                  <div className="plancher-card" onClick={() => openModal(plancher)}>
                    <div className="plancher-image-wrapper">
                      <div 
                        className="plancher-image"
                        style={{ 
                          backgroundImage: `url(${plancher.image})`
                        }}
                      />
                      <div className="plancher-overlay">
                        <span className="view-icon">👁️</span>
                        <span className="view-text">Voir</span>
                      </div>
                    </div>
                    <div className="plancher-info">
                      <h3>{plancher.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Vinyl Section */}
      <section className="plancher-boutique-section" id="vinyl" style={{backgroundColor: '#ffffff'}}>
        <div className="container">
          <div className="section-header">
            <h2>Vinyl</h2>
            <p className="section-subtitle">Plancher vinyl résistant et facile d'entretien</p>
          </div>
          <div className="empty-section">
            <p>Photos à venir</p>
          </div>
        </div>
      </section>

      {/* Flottant Section */}
      <section className="plancher-boutique-section" id="flottant">
        <div className="container">
          <div className="section-header">
            <h2>Flottant</h2>
            <p className="section-subtitle">Plancher flottant économique et polyvalent</p>
          </div>
          <div className="empty-section">
            <p>Photos à venir</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="plancher-boutique-cta">
        <div className="container">
          <h2>Besoin d'aide pour choisir votre plancher?</h2>
          <p>Contactez-nous pour des conseils personnalisés et une estimation gratuite</p>
          <Link to="/contact" className="cta-button">
            Nous Contacter
          </Link>
        </div>
      </section>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="plancher-modal-overlay" onClick={closeModal}>
          <div className="plancher-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>×</button>
            <div className="modal-image-container">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.name}
                className="modal-preview-image"
              />
            </div>
            <div className="modal-footer">
              <h3>{selectedImage.name}</h3>
              <p className="modal-price">À partir de 3.99$ par pc</p>
              <Link 
                to="/contact" 
                className="modal-cta-button"
                onClick={closeModal}
              >
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlancherBoutiquePage;
