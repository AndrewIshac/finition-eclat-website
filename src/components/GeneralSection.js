import React from 'react';
import Slider from 'react-slick';
import './GeneralSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function GeneralSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true
        }
      }
    ]
  };

  // Real general images from client (doors, tables, mouldings, etc.)
  const generalImages = [
    "IMG-20251110-WA0022.jpg",
    "IMG-20251110-WA0023.jpg",
    "IMG-20251110-WA0031.jpg",
    "IMG-20251110-WA0036.jpg",
    "IMG-20251110-WA0039.jpg",
    "IMG-20251110-WA0040.jpg",
    "IMG-20251110-WA0041.jpg",
    "IMG-20251110-WA0042.jpg",
    "IMG-20251110-WA0049.jpg",
    "IMG-20251110-WA0050.jpg",
    "IMG-20251110-WA0053.jpg",
    "IMG-20251110-WA0055.jpg",
    "IMG-20251110-WA0058.jpg",
    "IMG-20251110-WA0066.jpg",
    "IMG-20251110-WA0071.jpg",
    "IMG-20251110-WA0072.jpg",
    "IMG-20251110-WA0075.jpg",
    "IMG-20251110-WA0076.jpg"
  ];

  // Helper function to create image path
  const getImagePath = (folder, filename) => {
    return `/images/${folder}/${filename.replace(/ /g, '%20')}`;
  };

  const generalProjects = generalImages.map((image, index) => ({
    id: index + 1,
    image: getImagePath('general', image),
    title: `Projet ${index + 1}`
  }));

  return (
    <section className="general-section" id="general">
      <div className="container">
        <div className="section-header">
          <h2>Portes</h2>
          <p className="section-subtitle">
            Fabrication, finition et installation de portes en bois sur mesure
          </p>
          <p className="section-subtitle">
            Produit haute gamme
          </p>
        </div>

        {/* General Gallery */}
        <div className="general-gallery">
          <Slider {...settings}>
            {generalProjects.map((project) => (
              <div key={project.id} className="general-slide">
                <div className="general-card">
                  <div 
                    className="general-image"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="image-overlay">
                      <span className="view-text">Voir le projet</span>
                    </div>
                  </div>
                  <div className="general-info">
                    <h4>{project.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default GeneralSection;



