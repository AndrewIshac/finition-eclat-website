import React from 'react';
import Slider from 'react-slick';
import './KitchenSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function KitchenSection() {
  // Helper function to create image path
  const getImagePath = (folder, filename) => {
    return `/images/${folder}/${filename.replace(/ /g, '%20')}`;
  };

  // Helper function for new images folder
  const getNewImagePath = (filename) => {
    const encodedFolder = 'new%20images';
    const encodedFilename = filename.replace(/ /g, '%20');
    return `/${encodedFolder}/${encodedFilename}`;
  };

  // Kitchen images - including both old and new photos
  const kitchenImages = [
    {
      id: 1,
      image: getNewImagePath("Cuisine1.jpg"),
      title: "Projet Cuisine 1"
    },
    {
      id: 2,
      image: getNewImagePath("Cuisine2.jpg"),
      title: "Projet Cuisine 2"
    },
    {
      id: 3,
      image: getNewImagePath("Cuisine3.jpg"),
      title: "Projet Cuisine 3"
    },
    {
      id: 4,
      image: getImagePath('cuisine', "IMG-20251110-WA0021.jpg"),
      title: "Projet Cuisine 4"
    },
    {
      id: 5,
      image: getImagePath('cuisine', "IMG-20251110-WA0024.jpg"),
      title: "Projet Cuisine 5"
    },
    {
      id: 6,
      image: getImagePath('cuisine', "IMG-20251110-WA0054.jpg"),
      title: "Projet Cuisine 6"
    },
    {
      id: 7,
      image: getImagePath('cuisine', "IMG-20251110-WA0037.jpg"),
      title: "Projet Cuisine 7"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };

  return (
    <section className="kitchen-section" id="cuisine">
      <div className="container">
        <div className="section-header">
          <h2>Rénovation de Cuisine</h2>
          <p className="section-subtitle">
            Transformez votre cuisine avec nos services professionnels de refacing et rénovation
          </p>
          <p className="section-subtitle highlight">
            Refacing d'armoires, peinture, finition et restauration complète. 
            Nous redonnons vie à votre cuisine avec qualité et expertise.
          </p>
        </div>

        {/* Kitchen Gallery - Carousel with arrows */}
        <div className="kitchen-gallery-wrapper">
          <Slider {...settings}>
            {kitchenImages.map((item) => (
              <div key={item.id} className="kitchen-slide">
                <div className="kitchen-image-card">
                  <div 
                    className="kitchen-image"
                    style={{ 
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Additional Info */}
        <div className="kitchen-info-box">
          <h3>Nos Services de Rénovation</h3>
          <div className="services-list">
            <div className="service-item">
              <span className="checkmark">✓</span>
              <span>Refacing d'armoires</span>
            </div>
            <div className="service-item">
              <span className="checkmark">✓</span>
              <span>Peinture et finition</span>
            </div>
            <div className="service-item">
              <span className="checkmark">✓</span>
              <span>Restauration complète</span>
            </div>
            <div className="service-item">
              <span className="checkmark">✓</span>
              <span>Travail professionnel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KitchenSection;
