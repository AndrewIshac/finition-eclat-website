import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './HeroCarousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroCarousel() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true,
    arrows: true
  };

  const slides = [
    {
      id: 1,
      title: "Finition des Escaliers",
      image: `/images/escaliers/${encodeURIComponent("IMG-20251110-WA0026.jpg")}`,
      link: "/services/escaliers"
    },
    {
      id: 2,
      title: "Gants de Protection",
      image: `/images/gants/${encodeURIComponent("BoldMax - Nitrile Gloves.jpg")}`,
      link: "/boutique/gants"
    },
    {
      id: 3,
      title: "Vente & Installation de Plancher",
      image: `/images/plancher/${encodeURIComponent("PlancherMainPhoto.jpg")}`,
      link: "/services/plancher"
    },
    {
      id: 4,
      title: "Rénovation de Cuisine",
      image: `/images/cuisine/${encodeURIComponent("Cuisine1.jpg")}`,
      link: "/services/cuisine"
    },
    {
      id: 5,
      title: "Portes sur Mesure",
      image: `/images/PortesNew/${encodeURIComponent("WhatsApp Image 2025-12-23 at 11.23.44 PM.jpeg")}`,
      link: "/services/portes"
    }
  ];

  const handleSlideClick = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide" onClick={() => handleSlideClick(slide.link)} style={{ cursor: 'pointer' }}>
            <div 
              className={`slide-background ${slide.id === 2 ? 'gloves-slide' : ''} ${slide.id === 3 ? 'plancher-slide' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay">
                <h2 className="slide-title">{slide.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroCarousel;
