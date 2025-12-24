import React from 'react';
import Slider from 'react-slick';
import './StairsSection.css';

function StairsSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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

  // Helper function to create image path
  const getImagePath = (folder, filename) => {
    const encoded = filename.replace(/ /g, '%20');
    return `/images/${folder}/${encoded}`;
  };

  // Group 1-2: 2 images - split 50/50
  const group1_2 = {
    type: 'split-2',
    images: [
      { filename: "IMG-20251110-WA0026.jpg", folder: "escaliers" },
      { filename: "IMG-20251110-WA0027.jpg", folder: "escaliers" }
    ],
    title: "Projet Escalier 1"
  };

  // Escalier 2 right photo - alone as a project
  const escalier2_right = {
    type: 'single',
    images: [
      { filename: "IMG-20251110-WA0028.jpg", folder: "escaliers" }
    ],
    title: "Projet Escalier 2"
  };

  // Group 6-7-8-9: 4 images - 2x2 grid
  const group6_7_8_9 = {
    type: 'grid-4',
    images: [
      { filename: "IMG-20251110-WA0032 - Copy.jpg", folder: "escaliers" },
      { filename: "IMG-20251110-WA0048 - Copy.jpg", folder: "escaliers" },
      { filename: "IMG-20251110-WA0051 - Copy.jpg", folder: "escaliers" },
      { filename: "IMG-20251110-WA0056 - Copy.jpg", folder: "escaliers" }
    ],
    title: "Projet Escalier 3"
  };

  // Group 10-11-12: 3 images - 1 top, 2 bottom
  const group10_11_12 = {
    type: 'grid-3',
    images: [
      { filename: "IMG-20251110-WA0057 - Copy.jpg", folder: "escaliers" },
      { filename: "IMG-20251110-WA0065 - Copy.jpg", folder: "escaliers" },
      { filename: "IMG-20251110-WA0067 - Copy.jpg", folder: "escaliers" }
    ],
    title: "Projet Escalier 4"
  };

  // Projet Escalier 5: top left and bottom right stay, top right moved to escalier 6, bottom left moved to new project
  const group21_20_27_18_31 = {
    type: 'split-2',
    images: [
      { filename: "IMG-20251110-WA0081 - Copy.jpg", folder: "escaliers" }, // top left (stays)
      { filename: "IMG-20251110-WA0096.jpg", folder: "escaliers" } // bottom right (stays)
    ],
    title: "Projet Escalier 5"
  };

  // Projet Escalier 6: top left stays, top right (original) stays, top right from escalier 5 added, bottom photos moved to new project
  const group22_23_24_25 = {
    type: 'grid-3',
    images: [
      { filename: "IMG-20251110-WA0083 - Copy.jpg", folder: "escaliers" }, // top left (stays)
      { filename: "IMG-20251110-WA0088.jpg", folder: "escaliers" }, // top right (original, stays)
      { filename: "IMG-20251110-WA0080 - Copy.jpg", folder: "escaliers" } // top right from escalier 5
    ],
    title: "Projet Escalier 6"
  };

  // New independent project: escalier 2 left + escalier 6 bottom right + escalier 6 bottom left + escalier 5 left bottom (4 photos)
  const newIndependentProject = {
    type: 'grid-4',
    images: [
      { filename: "IMG-20251110-WA0093.jpg", folder: "escaliers" }, // escalier 2 left
      { filename: "IMG-20251110-WA0090.jpg", folder: "escaliers" }, // escalier 6 bottom right
      { filename: "IMG-20251110-WA0089.jpg", folder: "escaliers" }, // escalier 6 bottom left
      { filename: "IMG-20251110-WA0078 - Copy.jpg", folder: "escaliers" } // escalier 5 left bottom
    ],
    title: "Projet Escalier 7"
  };

  // Combine all project groups
  const projectGroups = [
    group1_2,
    escalier2_right,
    group6_7_8_9,
    group10_11_12,
    group21_20_27_18_31,
    group22_23_24_25,
    newIndependentProject
  ];

  // Color Matching Escalier - separate section
  const colormatchingEscalier = [
    { filename: "IMG-20251110-WA0043.jpg", folder: "plancher" },
    { filename: "IMG-20251110-WA0046.jpg", folder: "plancher" },
    { filename: "IMG-20251110-WA0047.jpg", folder: "plancher" },
    { filename: "IMG-20251110-WA0062.jpg", folder: "plancher" }
  ];

  // Render function for mixed image groups
  const renderMixedImages = (group) => {
    const { type, images, title } = group;

    if (type === 'single') {
      // 1 image: full width
      return (
        <div className="stairs-image-single">
          <div
            className="stairs-image-full"
            style={{
              backgroundImage: `url(${getImagePath(images[0].folder, images[0].filename)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
      );
    }

    if (type === 'split-2') {
      // 2 images: 50/50 split
      return (
        <div className="stairs-image-split-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="stairs-image-half"
              style={{
                backgroundImage: `url(${getImagePath(img.folder, img.filename)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </div>
      );
    }

    if (type === 'grid-3') {
      // 3 images: 1 top, 2 bottom
      return (
        <div className="stairs-image-grid-3">
          <div
            className="stairs-grid-item grid-item-full"
            style={{
              backgroundImage: `url(${getImagePath(images[0].folder, images[0].filename)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div
            className="stairs-grid-item"
            style={{
              backgroundImage: `url(${getImagePath(images[1].folder, images[1].filename)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div
            className="stairs-grid-item"
            style={{
              backgroundImage: `url(${getImagePath(images[2].folder, images[2].filename)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
      );
    }

    if (type === 'grid-4') {
      // 4 images: 2x2 grid
      return (
        <div className="stairs-image-grid-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="stairs-grid-item"
              style={{
                backgroundImage: `url(${getImagePath(img.folder, img.filename)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <section className="stairs-section" id="escaliers">
      <div className="container">
        <div className="section-header">
          <h2>Finition des Escaliers</h2>
          <p className="section-subtitle">
            Vous voulez changer vos Escaliers? Les Rénover, Repeinturer et Rafraîchir?
          </p>
          <p className="section-subtitle">
            Vous êtes en Bonnes Mains. Nous avons toutes les composantes 
            nécessaires pour votre escalier avec possibilité de Finition et Installation!
          </p>
        </div>

        {/* Stairs Gallery */}
        <div className="stairs-gallery">
          <h3 className="gallery-title">Nos Réalisations</h3>
          <Slider {...settings}>
            {projectGroups.map((group, index) => (
              <div key={index} className="stairs-slide">
                <div className="stairs-card">
                  {renderMixedImages(group)}
                  <div className="stairs-info">
                    <h4>{group.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Color Matching Escalier Section */}
        <div className="colormatching-section">
          <h3 className="gallery-title">Color Matching Escalier</h3>
          <Slider {...settings}>
            {colormatchingEscalier.map((item, index) => (
              <div key={index} className="stairs-slide">
                <div className="stairs-card">
                  <div
                    className="stairs-image"
                    style={{
                      backgroundImage: `url(${getImagePath(item.folder, item.filename)})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="image-overlay">
                      <span className="view-text">Voir le projet</span>
                    </div>
                  </div>
                  <div className="stairs-info">
                    <h4>Color Matching Escalier</h4>
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

export default StairsSection;
