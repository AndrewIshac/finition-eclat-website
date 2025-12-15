import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './FlooringSection.css';

function FlooringSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);
  const sliderInstanceRef = useRef(null);

  const openModal = (floor) => {
    setSelectedImage(floor);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Enable wheel scrolling for carousel on desktop with intensity-based scrolling
  useEffect(() => {
    let scrollTimeout = null;
    let accumulatedScroll = 0;
    let lastScrollTime = 0;

    const handleWheel = (e) => {
      // Only on desktop (screen width > 768px)
      if (window.innerWidth > 768) {
        const slider = sliderRef.current;
        if (slider && slider.contains(e.target)) {
          const deltaY = e.deltaY;
          const absDelta = Math.abs(deltaY);
          const currentTime = Date.now();
          
          // Reset accumulation if too much time has passed
          if (currentTime - lastScrollTime > 200) {
            accumulatedScroll = 0;
          }
          
          lastScrollTime = currentTime;
          
          // Accumulate scroll delta for intensity-based scrolling
          accumulatedScroll += absDelta;
          
          // Clear previous timeout
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          
          // Calculate how many slides to move based on scroll intensity
          // More scroll = more slides (max 4 at a time)
          const slidesToMove = Math.min(Math.floor(accumulatedScroll / 60), 4);
          
          if (slidesToMove > 0 && absDelta > 3) {
            e.preventDefault();
            e.stopPropagation();
            
            // Use the slider instance ref
            if (sliderInstanceRef.current) {
              // Move the carousel based on intensity
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
              // Fallback: trigger click on arrows
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
            
            // Reset accumulated scroll after moving
            accumulatedScroll = 0;
          }
          
          // Reset accumulation after a delay
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
  const settings = {
    dots: false, // No dots on any screen size
    infinite: true,
    speed: 600, // Smoother transition speed
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    swipe: true, // Enable swipe (works on touch devices)
    swipeToSlide: true, // Enable partial swipe - allows scrolling multiple items based on intensity
    touchMove: true, // Enable touch move
    draggable: true, // Enable dragging (works on touch devices)
    edgeFriction: 0.35, // Prevent carousel from moving when scrolling page
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Smooth easing
    useTransform: true, // Use CSS transforms for better performance
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          swipe: false, // Keep disabled on larger tablets
          swipeToSlide: false,
          draggable: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          swipe: true, // Enable swipe on mobile/tablet
          swipeToSlide: true, // Allow partial swipe to slide
          touchMove: true, // Enable touch move
          touchThreshold: 5, // Lower threshold for easier swiping
          draggable: true // Enable dragging on mobile
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          swipe: true, // Enable swipe on mobile
          swipeToSlide: true,
          touchMove: true,
          touchThreshold: 5,
          draggable: true
        }
      }
    ]
  };

  // Helper function for new images folder
  const getNewImagePath = (filename) => {
    const encodedFolder = 'new%20images';
    const encodedFilename = filename.replace(/ /g, '%20');
    return `/${encodedFolder}/${encodedFilename}`;
  };

  // New plancher images from "new images" folder (WhatsApp images)
  // Excluding Cuisine photos and PlancherMainPhoto
  const flooringImages = [
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
  const flooringTypes = flooringImages.map((img, index) => ({
    id: index + 1,
    name: `Plancher ${index + 1}`,
    image: getNewImagePath(img)
  }));

  return (
    <section className="flooring-section" id="plancher">
      <div className="container">
        <div className="section-header">
          <h2>Plancher</h2>
          <p className="section-subtitle">Découvrez nos différentes essences de bois</p>
        </div>

        <div className="flooring-carousel-wrapper" ref={sliderRef}>
          <Slider 
            {...settings}
            ref={(slider) => {
              sliderInstanceRef.current = slider;
            }}
          >
            {flooringTypes.map((floor) => (
              <div key={floor.id} className="flooring-slide">
                <div className="flooring-card" onClick={() => openModal(floor)}>
                  <div className="flooring-image-wrapper">
                    <div 
                      className="flooring-image"
                      style={{ 
                        backgroundImage: `url(${floor.image})`
                      }}
                    />
                    <div className="flooring-overlay">
                      <span className="view-icon">👁️</span>
                      <span className="view-text">Voir</span>
                    </div>
                  </div>
                  <div className="flooring-info">
                    <h3>{floor.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flooring-description">
          <p>
            Vous cherchez du Plancher pour votre Maison, Bureau ou autre? 
            Vous êtes un Contracteur qui cherche du plancher pour votre client?
          </p>
          <p>
            Que ce soit Bois Franc, Flottant ou Vinyl, 
            Vous êtes à la bonne place! Plancher à Prix Abordable & 
            Économique avec plusieurs choix de couleur. 
            Disponible aussi produit Haut de Gamme "Select".
          </p>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="flooring-modal-overlay" onClick={closeModal}>
          <div className="flooring-modal-content" onClick={(e) => e.stopPropagation()}>
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

export default FlooringSection;
