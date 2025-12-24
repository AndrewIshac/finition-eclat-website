import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './PortesSection.css';

function PortesSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);
  const sliderInstanceRef = useRef(null);

  const openModal = (porte) => {
    setSelectedImage(porte);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
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

  // Enable wheel scrolling for carousel on desktop with intensity-based scrolling
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

  // Helper function for image path
  const getImagePath = (folder, filename) => {
    const encoded = encodeURIComponent(filename);
    return `/images/${folder}/${encoded}`;
  };

  // Portes images from PortesNew folder
  const portesImages = [
    "WhatsApp Image 2025-12-23 at 11.23.44 PM.jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.47 PM (1).jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.47 PM (2).jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.47 PM.jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.48 PM (1).jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.48 PM (10).jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.48 PM (2).jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.48 PM (3).jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.48 PM (4).jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.48 PM (5).jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.48 PM (6).jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.48 PM (7).jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.48 PM (8).jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.48 PM (9).jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.48 PM.jpeg",
    "WhatsApp Image 2025-12-23 at 11.23.49 PM.jpeg"
  ];

  // Simple naming: Porte 1, Porte 2, etc.
  const portesTypes = portesImages.map((img, index) => ({
    id: index + 1,
    name: `Porte ${index + 1}`,
    image: getImagePath('PortesNew', img)
  }));

  return (
    <section className="portes-section" id="portes">
      <div className="container">
        <div className="section-header">
          <h2>Portes</h2>
          <p className="section-subtitle">Fabrication, finition et installation de portes en bois sur mesure</p>
          <p className="section-highlight">Produit haute gamme</p>
        </div>

        <div className="portes-carousel-wrapper" ref={sliderRef}>
          <Slider 
            {...settings}
            ref={(slider) => {
              sliderInstanceRef.current = slider;
            }}
          >
            {portesTypes.map((porte) => (
              <div key={porte.id} className="portes-slide">
                <div className="portes-card" onClick={() => openModal(porte)}>
                  <div className="portes-image-wrapper">
                    <div 
                      className="portes-image"
                      style={{ 
                        backgroundImage: `url(${porte.image})`
                      }}
                    />
                    <div className="portes-overlay">
                      <span className="view-icon">👁️</span>
                      <span className="view-text">Voir</span>
                    </div>
                  </div>
                  <div className="portes-info">
                    <h3>{porte.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="portes-description">
          <p>
            Nous offrons des services complets de fabrication, finition et installation 
            de portes en bois sur mesure. Chaque porte est conçue et fabriquée selon vos 
            spécifications exactes pour s'intégrer parfaitement à votre espace.
          </p>
          <p>
            Nos portes sont fabriquées avec des matériaux de haute qualité et une 
            finition exceptionnelle, garantissant durabilité et esthétique pour votre 
            maison ou bureau.
          </p>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="portes-modal-overlay" onClick={closeModal}>
          <div className="portes-modal-content" onClick={(e) => e.stopPropagation()}>
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortesSection;

